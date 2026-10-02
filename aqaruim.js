

console.log("AQUARIUM JS IS RUNNING");
const FEEDS_TO_EXPLODE = 4;
const SPRINKLES_FOR_FRENZY = 5;
const pageUrl = (page) => `/${page}.html`;




const interestNames = {
  design: "Design & Art",
  movies: "Movies & Drama",
  cooking: "Cooking & Baking",
  learning: "Learning, History & Culture",
  exploring: "Exploring & Trying New Things"
};

const $ = (sel) => document.querySelector(sel);
const aquarium = $("#aquarium");
const water = $(".water");
const fishes = [...document.querySelectorAll("button.fish")];
const feedBtn = $("#foodButton");
const text = $("#instructionText");
const helpBtn = $("#helpButton");
const helpPanel = $("#helpPanel");
const closeHelp = $("#closeHelp");



if (aquarium && water && feedBtn && text) {
  let selected = null;
  let sprinkles = 0;
  let busy = false;

  const wait = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const say = (message) => { text.textContent = message; };

  const nameOf = (fish) => fish.getAttribute("aria-label");
  const interestOf = (fish) =>
    interestNames[fish.dataset.page] || nameOf(fish);



  const lock = (on) => { busy = on; feedBtn.disabled = on; };

  text.setAttribute("aria-live", "polite");

  function centerOf(el) {
    const w = water.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    return { x: r.left - w.left + r.width / 2, y: r.top - w.top + r.height / 2 };
  }

  function dropFood(x, targetY, count = 5) {
    for (let i = 0; i < count; i++) {
      const p = document.createElement("span");
      p.className = "pellet";
      p.style.left = `${x + (Math.random() - 0.5) * 60}px`;
      p.style.top = "8px";
      p.style.setProperty("--fall", `${Math.max(targetY - 8, 60)}px`);
      p.style.animationDelay = `${i * 90}ms`;
      p.addEventListener("animationend", () => p.remove());
      water.append(p);
    }
  }

  function chomp(fish) {
    fish.classList.add("eating");
    setTimeout(() => fish.classList.remove("eating"), 1100);
  }

  function burst(x, y, color) {
    const ring = document.createElement("span");
    ring.className = "shockwave";
    ring.style.left = `${x}px`;
    ring.style.top = `${y}px`;
    water.append(ring);
    setTimeout(() => ring.remove(), 900);

    for (let i = 0; i < 18; i++) {
      const s = document.createElement("span");
      const angle = (Math.PI * 2 * i) / 18 + Math.random() * 0.4;
      const dist = 90 + Math.random() * 130;
      s.className = "burst";
      s.style.left = `${x}px`;
      s.style.top = `${y}px`;
      s.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
      s.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
      s.style.setProperty("--c", i % 3 === 0 ? "#fff" : color);
      water.append(s);
      setTimeout(() => s.remove(), 1000);
    }
  }

  /* ---------- Picking a fish ---------- */
  fishes.forEach((fish) => {
    fish.setAttribute("aria-pressed", "false");
    fish.addEventListener("click", () => {
      if (busy) return;
      const same = selected === fish;
      fishes.forEach((f) => { f.classList.remove("selected"); f.setAttribute("aria-pressed", "false"); });
      if (same) {
        selected = null;
        say("Feed a fish to discover where it takes you.");
        return;
      }
      selected = fish;
      fish.classList.add("selected");
      fish.setAttribute("aria-pressed", "true");
      const left = FEEDS_TO_EXPLODE - Number(fish.dataset.feeds);

      say(
        `${interestOf(fish)} picked. Feed it ${left} more time${left > 1 ? "s" : ""}.`
      );
    });
  });

  feedBtn.addEventListener("click", () => {
    if (busy) return;
    selected ? feedFish(selected) : sprinkle();
  });

  async function feedFish(fish) {
    lock(true);
    const feeds = Number(fish.dataset.feeds) + 1;
    fish.dataset.feeds = feeds;

    const { x, y } = centerOf(fish);
    dropFood(x, y);
    await wait(900);
    chomp(fish);
    fish.style.setProperty("--grow", 1 + feeds * 0.14);

    if (feeds >= FEEDS_TO_EXPLODE) return explode(fish);

    if (feeds === FEEDS_TO_EXPLODE - 1) {
      fish.classList.add("wobble");
      say(`${interestOf(fish)} is about to burst! One more bite...`);
    } else {
      say(`Yum! ${interestOf(fish)} wants more.`);
    }
    lock(false);
  }

  async function sprinkle() {
    lock(true);
    sprinkles++;

    const h = water.clientHeight;
    for (let i = 0; i < 3; i++) {
      dropFood(80 + Math.random() * (water.clientWidth - 160), h * (0.45 + Math.random() * 0.2), 4);
    }
    await wait(900);
    chomp(fishes[Math.floor(Math.random() * fishes.length)]);

    if (sprinkles >= SPRINKLES_FOR_FRENZY) return frenzy();

    const left = SPRINKLES_FOR_FRENZY - sprinkles;
    say(sprinkles === 1
      ? "Everyone is nibbling. Pick a fish, or keep feeding and see what happens."
      : `The tank is getting excited... ${left} more feed${left > 1 ? "s" : ""}.`);
    lock(false);
  }

  async function frenzy() {
    say("Feeding frenzy! The tank is choosing for you...");
    water.classList.add("frenzy");
    for (let i = 0; i < 4; i++) {
      dropFood(60 + Math.random() * (water.clientWidth - 120), water.clientHeight * 0.6, 6);
      await wait(350);
    }
    await wait(900);
    water.classList.remove("frenzy");

    const lucky = fishes[Math.floor(Math.random() * fishes.length)];
    lucky.classList.add("lucky");
    say(`${interestOf(lucky)} is your lucky fish!`);
    await wait(1500);
    explode(lucky);
  }

  async function explode(fish) {
    lock(true);

    fish.classList.remove("wobble", "lucky");
    fish.classList.add("exploding");

    say(`${interestOf(fish)} is bursting!`);

    await wait(950);

    const { x, y } = centerOf(fish);

    burst(
      x,
      y,
      getComputedStyle(fish)
        .getPropertyValue("--fish-color")
        .trim() || "#fff"
    );

    fish.classList.add("popped");
    aquarium.classList.add("flash");

    say(`Pop! Discovering ${interestOf(fish)}...`);

    await wait(1300);

    document.body.classList.add("leaving");

    await wait(500);
    window.location.href = pageUrl(fish.dataset.page);


  }
  if (helpBtn && helpPanel) {
    const setHelp = (open) => helpPanel.classList.toggle("open", open);
    helpBtn.addEventListener("click", () => setHelp(!helpPanel.classList.contains("open")));
    closeHelp?.addEventListener("click", () => setHelp(false));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setHelp(false); });
  }}