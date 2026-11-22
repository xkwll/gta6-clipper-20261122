# GTA 6 clip — Vice City drive

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 20-second vertical clip cut from Rockstar's Grand Theft Auto VI Trailer 2
(30s–50s: Jason driving through Leonida / Vice City, highway, beach), cropped
to 720x1280. The hook is the drive itself, with "GTA 6 IS HERE" on screen for
the first 11 seconds. From 12 seconds the pitch is on screen, readable for
eight seconds: "Make clips like this with AI and earn money on make.fun" plus
make.fun/bounty/gta6-clipper-01.

The clip is published public on YouTube as a Short. Its description carries
the bounty's line and the entrant's play code. This repository only hands in
the video's address: `VIDEO.json` names it, and `main.ts` copies that file to
`/output`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
