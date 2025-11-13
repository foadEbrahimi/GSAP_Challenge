# 🚀 GSAP Animation Challenges

**A personal learning journey with GSAP — from beginner to professional.**  
This repository documents my step-by-step challenges and experiments as I learn to create smooth, performant, and visually engaging animations using **GSAP (GreenSock Animation Platform)**.

---

## 🎯 Project Goal

To master GSAP from the ground up by building real animation challenges that improve:
- Motion design thinking  
- Timeline & sequencing logic  
- Performance optimization  
- UI/UX animation polish  
- React + GSAP integration  

---

## 🧠 Learning Structure

The learning path is divided into **three main levels**.  
Each level contains 10 focused challenges designed to progressively increase in complexity.

### 🟢 Beginner Level
Focus: Fundamentals, tweens, timelines, easing, staggering, and simple UI motion.

| # | Challenge | Key Concept |
|---|------------|-------------|
| 1 | Fade-in animation | `gsap.from`, opacity, y-offset |
| 2 | Staggered list reveal | `stagger`, `gsap.utils.toArray()` |
| 3 | Button hover interaction | hover events + tween control |
| 4 | Card flip (timeline) | sequencing tweens in a timeline |
| 5 | Loading bar animation | scaling, duration, easing |
| 6 | Modal open/close | timeline chaining, cleanup |
| 7 | SVG path drawing | strokeDashoffset animation |
| 8 | Mouse parallax | mouse position + `gsap.to` |
| 9 | Repeat & yoyo pulse | looping tweens, controls |
| 10 | Timeline controls UI | play, pause, reverse, progress |

#### 🔍 Notes for Beginners
- Always prefer `transform` (translate, scale, rotate) over `top/left` for smoother GPU-accelerated animations.  
- Use `gsap.context()` when working inside React components to clean up on unmount.  
- Try different `ease` functions (`power2.out`, `elastic`, etc.) and observe the motion differences.  
- Label your timelines using `.addLabel()` for easier debugging.

---

### 🟡 Intermediate Level
Focus: Plugin usage, scroll-based animations, performance tuning, and coordinated sequences.

| # | Challenge | Key Concept |
|---|------------|-------------|
| 1 | Randomized stagger grid | controlled randomness |
| 2 | Draggable card with snap | `Draggable` plugin |
| 3 | Scroll-based reveal | intersection observer + GSAP |
| 4 | SVG morph animation | `MorphSVGPlugin` |
| 5 | Inertia toss effect | physics-based motion |
| 6 | Audio-synced animation | timeline syncing |
| 7 | Grid reflow (FLIP) | FLIP technique |
| 8 | 3D card rotation | `rotateX`, `rotateY`, perspective |
| 9 | Animated bar/line charts | property animation coordination |
| 10 | Route transitions | page enter/exit animations in React |

---

### 🔴 Advanced Level
Focus: Production-quality motion systems, ScrollTrigger, optimization, and real-world animation architecture.

| # | Challenge | Key Concept |
|---|------------|-------------|
| 1 | Scroll-driven storytelling | `ScrollTrigger` with pin/scrub |
| 2 | Performance-optimized lists | virtualization + GSAP |
| 3 | Procedural animation | Canvas / Three.js integration |
| 4 | State-driven UI motion | sync timelines with app state |
| 5 | Real-time sync animations | WebSocket + timeline offset |
| 6 | Custom easing library | `CustomEase.create()` |
| 7 | Reduced-motion support | accessibility & motion preferences |
| 8 | Visual regression tests | deterministic animation testing |
| 9 | Exporting motion assets | capture & render to video/gif |
| 10 | Design-to-code motion tokens | motion specs → code automation |

---

## 🧩 Technologies Used

- **GSAP (GreenSock Animation Platform)**
- **HTML / CSS / JavaScript (Vanilla)**
- **React** (optional for component-based experiments)
- **Vite** (for fast local development)
- Optional GSAP plugins:
  - **ScrollTrigger**
  - **Draggable**
  - **MorphSVGPlugin**
  - **InertiaPlugin**

---

## 📚 Learning Progress

### 🟢 Beginner Level
- [ ] Learned the difference between **tweens** and **timelines**
- [ ] Practiced basic properties (`x`, `y`, `opacity`, `scale`)
- [ ] Experimented with **easing functions** (`power2`, `elastic`, `back`)
- [ ] Built a **fade-in** animation with `gsap.from`
- [ ] Created a **staggered list reveal**
- [ ] Added a **hover interaction** using event listeners + GSAP
- [ ] Made a **card flip** using a timeline sequence
- [ ] Built a **loading bar** animation with `scaleX`
- [ ] Implemented **modal open/close** with animation chaining
- [ ] Drew SVG paths with `strokeDashoffset` animation
- [ ] Added **mouse parallax** movement
- [ ] Controlled animations with **play/pause/reverse buttons**

**→ Status:** `0 / 12` beginner challenges completed ✅

---

### 🟡 Intermediate Level
- [ ] Created randomized **stagger grid** animations
- [ ] Used **Draggable** plugin for interactive cards
- [ ] Built **scroll-based reveals** (Intersection Observer + GSAP)
- [ ] Tried **MorphSVGPlugin** for SVG morphing
- [ ] Simulated **physics/inertia** motion
- [ ] Synced animations with **audio beats**
- [ ] Animated grid reflow using **FLIP technique**
- [ ] Built **3D card rotation** with perspective
- [ ] Animated data visualizations (charts, bars, lines)
- [ ] Implemented **route transitions** between pages

**→ Status:** `0 / 10` intermediate challenges completed 🟡

---

### 🔴 Advanced Level
- [ ] Scroll-driven storytelling with **ScrollTrigger**
- [ ] Performance-optimized virtualized list animations
- [ ] Procedural / **Canvas** or **Three.js** GSAP integration
- [ ] State-driven UI motion system
- [ ] Real-time synced animations (WebSockets)
- [ ] Created custom **easing library**
- [ ] Added **reduced-motion accessibility** support
- [ ] Set up **visual regression testing** for animations
- [ ] Built animation export (GIF / MP4)
- [ ] Automated **design-to-code motion tokens**

**→ Status:** `0 / 10` advanced challenges completed 🔴


## 💡 Notes & Tips

- Use `gsap.timeline()` to sequence multiple animations efficiently.
- Prefer `transform` properties (`x`, `y`, `scale`, `rotate`) over `top/left` for smoother GPU-accelerated motion.
- Use `stagger` for animating groups of elements with delay variations.
- Always clean up animations in React using `gsap.context()` or `tl.kill()` to prevent memory leaks.
- Experiment with different easing functions (`power1`, `power2`, `elastic`, `bounce`) to understand motion feel.
- Use `overwrite: "auto"` on tweens to avoid conflicts when multiple animations affect the same element.
- For scroll-based animations, consider `ScrollTrigger` or `IntersectionObserver`.
- Label your timeline steps with `.addLabel()` for easier debugging and control.
- Keep animations modular and reusable — consider creating separate JS files for each type of animation.
- Test animations on multiple devices to ensure performance and smoothness.

## ⚙️ Setup

1. Clone the repository:
```
git clone https://github.com/foadEbrahimi/GSAP_Challenge.git
```
2. Install dependencies:
```
cd GSAP_Challenge
npm install
```
3. Start development server:
```npm run dev```
4. Each challenge is in its own folder:
```
/beginner/01-fade-in
/beginner/02-staggered-list
...
/intermediate/...
/advanced/...
```

## 🧾 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute the code for personal or educational purposes.
Please give credit to the original author if used in public projects.
