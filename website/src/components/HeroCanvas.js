/* ==========================================================================
   HeroCanvas.js — Three.js Neural Network Animation
   Renders an animated 3D neural network graph as the hero background
   Responds to mouse parallax
   ========================================================================== */

import * as THREE from 'three'

let renderer, scene, camera
let nodes = []
let edges = []
let particles = []
let mouseX = 0
let mouseY = 0
let animId = null
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// ── Config ──
const CONFIG = {
  NODE_COUNT: 70,
  SPREAD: 5,
  NODE_COLORS: [0x00F5FF, 0x8B5CF6, 0x10B981, 0x3B82F6],
  EDGE_COLOR: 0x00F5FF,
  PARTICLE_COLOR: 0x00F5FF,
  MAX_EDGE_DISTANCE: 2.5,
  ROTATION_SPEED: 0.0003,
  MOUSE_PARALLAX: 0.08,
}

export function initHeroCanvas(containerId) {
  const container = document.getElementById(containerId)
  if (!container) return

  const W = container.clientWidth
  const H = container.clientHeight

  // ── Scene ──
  scene = new THREE.Scene()

  // ── Camera ──
  camera = new THREE.PerspectiveCamera(55, W / H, 0.1, 100)
  camera.position.z = 8

  // ── Renderer ──
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })
  renderer.setSize(W, H)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x000000, 0) // transparent
  container.appendChild(renderer.domElement)

  // ── Ambient Fog for depth ──
  scene.fog = new THREE.FogExp2(0x000000, 0.06)

  // ── Create Nodes ──
  buildNeuralNet()

  // ── Resize handler ──
  window.addEventListener('resize', onResize)

  // ── Mouse parallax ──
  document.addEventListener('mousemove', onMouseMove)

  // ── Animate ──
  if (!reducedMotion) {
    animate()
  } else {
    renderer.render(scene, camera)
  }
}

function buildNeuralNet() {
  const geometry = new THREE.SphereGeometry(0.06, 8, 8)
  const nodePositions = []

  // Create node positions
  for (let i = 0; i < CONFIG.NODE_COUNT; i++) {
    const pos = new THREE.Vector3(
      (Math.random() - 0.5) * CONFIG.SPREAD * 2,
      (Math.random() - 0.5) * CONFIG.SPREAD * 1.4,
      (Math.random() - 0.5) * CONFIG.SPREAD
    )
    nodePositions.push(pos)
  }

  // Create node meshes
  nodePositions.forEach((pos, i) => {
    const color = CONFIG.NODE_COLORS[i % CONFIG.NODE_COLORS.length]
    const material = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.85,
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.copy(pos)

    // Add pulsing data
    mesh.userData = {
      originalPos: pos.clone(),
      phase: Math.random() * Math.PI * 2,
      speed: 0.3 + Math.random() * 0.4,
      pulseSpeed: 0.5 + Math.random() * 0.8,
      pulse: Math.random(),
    }

    scene.add(mesh)
    nodes.push(mesh)

    // Glow sprite
    const spriteMaterial = new THREE.SpriteMaterial({
      color,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    })
    const sprite = new THREE.Sprite(spriteMaterial)
    sprite.scale.setScalar(0.4)
    sprite.position.copy(pos)
    scene.add(sprite)
  })

  // Create edges between nearby nodes
  const lineMaterial = new THREE.LineBasicMaterial({
    color: CONFIG.EDGE_COLOR,
    transparent: true,
    opacity: 0.12,
    blending: THREE.AdditiveBlending,
  })

  for (let i = 0; i < nodePositions.length; i++) {
    for (let j = i + 1; j < nodePositions.length; j++) {
      const dist = nodePositions[i].distanceTo(nodePositions[j])
      if (dist < CONFIG.MAX_EDGE_DISTANCE) {
        const edgeGeo = new THREE.BufferGeometry().setFromPoints([
          nodePositions[i],
          nodePositions[j],
        ])
        const opacity = (1 - dist / CONFIG.MAX_EDGE_DISTANCE) * 0.3
        const mat = lineMaterial.clone()
        mat.opacity = opacity
        const line = new THREE.Line(edgeGeo, mat)
        line.userData = { opacity }
        scene.add(line)
        edges.push(line)
      }
    }
  }

  // ── Data flow particles along edges ──
  buildParticles(nodePositions)
}

function buildParticles(nodePositions) {
  const geo = new THREE.SphereGeometry(0.025, 4, 4)
  const mat = new THREE.MeshBasicMaterial({
    color: CONFIG.PARTICLE_COLOR,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
  })

  // Pick 20 random edges and place a moving particle on each
  for (let k = 0; k < 20; k++) {
    const i = Math.floor(Math.random() * nodePositions.length)
    const j = Math.floor(Math.random() * nodePositions.length)
    if (i === j) continue

    const mesh = new THREE.Mesh(geo, mat.clone())
    mesh.userData = {
      from: nodePositions[i].clone(),
      to: nodePositions[j].clone(),
      t: Math.random(),
      speed: 0.003 + Math.random() * 0.006,
    }
    scene.add(mesh)
    particles.push(mesh)
  }
}

function animate() {
  animId = requestAnimationFrame(animate)

  const t = performance.now() * 0.001

  // ── Node pulsing + gentle float ──
  nodes.forEach((node, i) => {
    const d = node.userData
    node.position.x = d.originalPos.x + Math.sin(t * d.speed + d.phase) * 0.08
    node.position.y = d.originalPos.y + Math.cos(t * d.speed * 0.7 + d.phase) * 0.06
    const scale = 0.85 + 0.3 * Math.sin(t * d.pulseSpeed + d.pulse)
    node.scale.setScalar(scale)
    node.material.opacity = 0.5 + 0.5 * Math.sin(t * d.pulseSpeed + d.pulse)
  })

  // ── Data flow particles ──
  particles.forEach(p => {
    p.userData.t += p.userData.speed
    if (p.userData.t > 1) p.userData.t = 0
    p.position.lerpVectors(p.userData.from, p.userData.to, p.userData.t)
    p.material.opacity = Math.sin(p.userData.t * Math.PI) * 0.9
  })

  // ── Camera parallax (mouse-based) ──
  camera.position.x += (mouseX * CONFIG.MOUSE_PARALLAX - camera.position.x) * 0.03
  camera.position.y += (-mouseY * CONFIG.MOUSE_PARALLAX - camera.position.y) * 0.03
  camera.lookAt(0, 0, 0)

  // ── Slow orbital rotation of whole group ──
  scene.rotation.y += CONFIG.ROTATION_SPEED
  scene.rotation.x = Math.sin(t * 0.05) * 0.05

  renderer.render(scene, camera)
}

function onResize() {
  const container = renderer.domElement.parentElement
  if (!container) return
  const W = container.clientWidth
  const H = container.clientHeight
  camera.aspect = W / H
  camera.updateProjectionMatrix()
  renderer.setSize(W, H)
}

function onMouseMove(e) {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2
}

export function destroyHeroCanvas() {
  if (animId) cancelAnimationFrame(animId)
  window.removeEventListener('resize', onResize)
  document.removeEventListener('mousemove', onMouseMove)
  if (renderer) {
    renderer.dispose()
    renderer.domElement.remove()
  }
}
