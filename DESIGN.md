---
name: Healthy Tech Balance
description: Jessica Ludlow's free values quiz and family resources, in fixed brand green, light green and white.
colors:
  primary: "#60815f"
  light-green: "#edf8ea"
  white: "#ffffff"
  ink: "#1b211b"
  ink-soft: "#2c342c"
  ink-muted: "#3b443b"
typography:
  display:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "clamp(2.5rem, 6.5vw, 4rem)"
    fontWeight: 750
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontFeature: "'cv11'"
  headline:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3rem)"
    fontWeight: 750
    lineHeight: 1.05
    letterSpacing: "-0.03em"
    fontFeature: "'cv11'"
  headline-question:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "clamp(1.75rem, 5vw, 2.5rem)"
    fontWeight: 750
    lineHeight: 1.1
    letterSpacing: "-0.03em"
    fontFeature: "'cv11'"
  title:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "21px"
    fontWeight: 650
    lineHeight: 1.3
    letterSpacing: "-0.015em"
    fontFeature: "'cv11'"
  lead:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.45
    fontFeature: "'cv11'"
  body:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
    fontFeature: "'cv11'"
  body-on-green:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.55
    fontFeature: "'cv11'"
  label:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.4
    fontFeature: "'cv11'"
  button:
    fontFamily: "Inter Variable, Inter, sans-serif"
    fontSize: "19px"
    fontWeight: 700
    lineHeight: 1.2
    fontFeature: "'cv11'"
rounded:
  link: "3px"
  check: "7px"
  item: "10px"
  tile: "12px"
  control: "16px"
  row: "18px"
  card: "20px"
  sheet: "28px"
  pill: "9999px"
spacing:
  gutter: "24px"
  card: "28px"
  section: "80px"
  page-top: "88px"
  callout: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 26px"
    height: "52px"
  button-primary-disabled:
    backgroundColor: "{colors.light-green}"
    textColor: "{colors.ink-muted}"
  button-secondary:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-secondary-hover:
    backgroundColor: "{colors.light-green}"
  button-on-green:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "12px 26px"
    height: "52px"
  button-on-green-hover:
    backgroundColor: "{colors.light-green}"
  sheet:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.sheet}"
    padding: "40px 44px"
    width: "680px"
  link-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "20px 22px"
  link-card-tint:
    backgroundColor: "{colors.light-green}"
  answer-option:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "16px 18px"
  answer-option-selected:
    backgroundColor: "{colors.light-green}"
  nav-link:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "8px 12px"
  nav-link-hover:
    backgroundColor: "{colors.light-green}"
    textColor: "{colors.ink}"
  icon-badge:
    backgroundColor: "{colors.light-green}"
    textColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    size: "52px"
---

# Design System: Healthy Tech Balance

## Overview

**Creative North Star: "The Kitchen-Table Conversation"**

The site reads like a calm talk with one parent who has been through it, held in three fixed brand colours: a muted sage green, a pale leaf green and white. Nothing is loud. Pages are tall stacks of full-bleed bands that alternate white and light green, each holding one idea in a narrow reading column, with heavy, tightly tracked Inter headings doing the work that decoration would do elsewhere. The green itself appears as a solid field only where it asks for something: the hero panel, the quiz callout band, the primary pill button, the filled progress segments.

Depth is soft and low. Surfaces that are "held" (the quiz sheet, the hero panel, photos) sit on long, diffuse green-black shadows with a negative spread, so they lift without a hard edge. Everything else is flat and separated by tone, hairline green rules, or a light green fill. Shapes are generously rounded and buttons are always pills, which keeps the tool feeling gentle for visitors who arrive overwhelmed.

The system rejects the furniture of generic wellness and SaaS sites: no eyebrow or kicker labels over headings, no coloured left-border callouts, no glass or blur panels, no emoji, no unicode arrows standing in for icons.

**Key Characteristics:**
- Three fixed brand colours plus a green-tinted ink ramp; no other hues.
- Alternating white and light green full-bleed sections; a solid green band only for the quiz call to action.
- Inter Variable at weight 750 with negative tracking for every heading; 17px body at 1.65 line height.
- Pill buttons, 20px cards, 28px sheets.
- Long, soft, negative-spread shadows only on held surfaces.
- Heroicons only, tinted green.

## Colors

A restrained, fixed palette: one sage green that does all the signalling, one pale green for surfaces, white, and an ink ramp nudged toward green so text never reads as cold grey.

### Primary
- **Sage Green** (primary): The brand's one voice. Solid fills for the primary pill button, the hero panel, the quiz callout band, filled progress segments, the top-ranked value's number badge and score bars. As a line colour it draws outlined pills, answer-option borders (at 35% at rest, full on hover and selected), the StepPath connector (45%), section rules (20% to 35%) and every link underline. Icons are tinted with it. It is also the focus outline, the caret, the native accent colour and (at 28%) the text selection.

### Neutral
- **Leaf Wash** (light-green): The alternate section background, the quiz and results page ground behind the white sheet, the hover fill for every secondary control, the selected answer fill, the top value row, the fill of icon badges, and the "tint" card tone used on white sections.
- **Paper White** (white): The other section background, the sheet, cards that sit on light green, and the only text colour allowed on green.
- **Deep Ink** (ink): Headings, button labels on white, link text, and all emphasised text. Set as the root text colour.
- **Soft Ink** (ink-soft): Secondary text inside light green note blocks.
- **Muted Ink** (ink-muted): Body paragraphs, intros, captions, inactive nav links and counts. It still clears 9:1 on light green, so muted never means faint.

### Named Rules

**The Large-White-Only Rule.** White on sage green measures about 4.4:1, so white text on a green field is only ever large: headings, 19px bold body and 19px bold button labels. Never set small or regular-weight text on green; if copy on a green band needs to be longer, keep it 19px bold.

**The Ink-Not-Green Link Rule.** Text links are Deep Ink with a sage green underline (1.5px, offset 5px, thickening to 2.5px on hover). Green is never the colour of running text or link text. There are no exceptions: even display-size labels such as the MAP and LIGHT framework acronyms are set in Deep Ink, and their step letters sit in green-outlined circles like the numbered step markers.

**The Fixed Brand Rule.** Sage green, Leaf Wash and white are binding brand colours. Do not add hues, gradients, or new tints beyond opacity steps of sage green.

## Typography

**Display Font:** Inter Variable (with Inter, sans-serif)
**Body Font:** Inter Variable (with Inter, sans-serif)

**Character:** One family carries everything. Headings use Inter's variable axis at an off-grid 750 with tight negative tracking, so they feel firm and warm rather than corporate; body text stays at regular weight with generous leading for calm reading. Character variant `cv11` is on site-wide.

### Hierarchy
- **Display** (750, clamp(2.5rem, 6.5vw, 4rem), 1.02, -0.035em): Page titles on Learn and Resources and the hero brand name. Balanced wrapping.
- **Headline** (750, clamp(2rem, 5vw, 3rem), 1.05, -0.03em): Every section heading. The quiz callout uses a larger step (clamp(2.25rem, 5.5vw, 3.5rem), 1.03) in white; the results title uses clamp(2.25rem, 6vw, 3rem).
- **Headline Question** (750, clamp(1.75rem, 5vw, 2.5rem), 1.1): The quiz question, which is the h1 of the quiz sheet.
- **Title** (650, 21px to 22px, -0.015em): Card, step, value and group headings. The top-ranked value name steps up to 21px bold.
- **Lead** (500, 22px, 1.45, Deep Ink): The first paragraph of a story section. Page intros use a fluid clamp(1.25rem, 2.6vw, 1.5rem) at the same weight.
- **Section Intro** (400, 18px, 1.6, Muted Ink, max 60ch): The one line under a section heading.
- **Body** (400, 17px, 1.65, Muted Ink): Paragraphs, pretty-wrapped, in columns of 58 to 62ch.
- **Body on Green** (700, 19px, 1.55, white): The only body style allowed on a green field.
- **Label** (600, 15px): Captions, counts, secondary pill labels, credentials lines. 14px at 650 heads small content blocks ("Suggested goals"); 13px at 650 for tag chips.
- **Button** (700, 19px): Primary and on-green pill labels.

### Named Rules

**The One-Family Rule.** Inter Variable is the only face. Hierarchy comes from weight (400 / 500 / 600 / 650 / 700 / 750), size and tracking, never a second family or a system display face.

**The Sentence-Case Rule.** No uppercase, no letter-spaced labels. Small labels are sentence case at 13px to 15px and sit inside or below content, never as a kicker above a heading.

## Layout

Mobile-first, checked at 390px, 768px and 1440px, with no horizontal scroll. Pages are stacks of full-bleed sections, each with a 24px side gutter and 80px vertical padding; page-top sections open with 88px above, and the green quiz callout band uses 96px. Inside each band the content sits in a centred column chosen by its job: 680px for reading and the quiz sheet, 720px for page intros and the callout, 760px to 880px for article lists and figures, 1040px for grids.

Sections alternate white and light green down the page, and pages end on the green quiz callout. The quiz and results pages instead set a single white sheet (max 680px, 28px corners) on a light green ground with 12px outer gutters, 24px top space (48px from md) and 96px below.

Grids collapse to one column on mobile. Two-column card and icon-list grids open at md (768px); the step path turns horizontal at md; label-plus-body rows (core values, Resources intro with its jump list) open at 900px; the social grid reaches four columns at lg. Desktop nav links appear at lg (1024px); below that the header shows the hamburger menu.

Vertical rhythm inside a section: heading to intro 12px, intro to content 40px to 48px, card gaps 12px, list rows separated by 16px to 32px with hairline green rules.

## Elevation & Depth

A hybrid system. Most of the page is flat and layered by tone (white on light green, light green on white). Real shadows are reserved for surfaces that are held up for attention, and they are always long, soft and tinted with Deep Ink at a negative spread so the shadow pools beneath rather than outlining the edge. Selection and emphasis use inset rings, not drop shadows.

### Shadow Vocabulary
- **Sheet** (`box-shadow: 0 24px 48px -28px rgb(27 33 27 / 0.35)`): The white quiz and results sheet, and the hamburger menu panel.
- **Panel** (`box-shadow: 0 30px 60px -30px rgb(27 33 27 / 0.6)`): The green hero panel floating over the photo. The Resources quiz panel uses a near-identical value.
- **Photo** (`box-shadow: 0 18px 40px -18px rgb(27 33 27 / 0.4)`): Jessica's portrait and the screen-time guidelines chart.
- **Inset ring** (`box-shadow: inset 0 0 0 1px` to `2px` sage green): Selected answer options, the top value row and featured link cards, adding weight to the existing border without lifting.

### Named Rules

**The Held-Surface Rule.** Only sheets, panels, menus and photos cast shadows. Cards, rows and buttons stay flat; state is shown with fill and ring, not elevation.

## Shapes

Soft, consistent rounding that grows with the size of the surface: 3px on inline links (so focus outlines curve), 7px on answer checkboxes, 10px on nav and jump-list items, 12px on goal tiles, 16px on answer options, menus and figures, 18px on value rows and social tiles, 20px on cards and the portrait, 28px on sheets, the hero panel and framework cards. Every button, chip, nav link, tag, progress segment and icon badge is a full pill or circle. Borders are 1.5px sage green (often at reduced opacity); dividers are 1px sage green at 20% to 35%.

**The Pill Rule.** Anything you press is a pill. Rectangles are for content.

## Components

### Buttons
Calm, chunky and unmistakable.
- **Shape:** Full pill (9999px), minimum 52px tall.
- **Primary:** Sage green fill, white 19px bold label, 12px by 26px padding, optional 18px chevron. Disabled turns Leaf Wash with Muted Ink at 60%.
- **Secondary:** White pill with a 1.5px sage green border, 15px semibold Deep Ink label, 10px by 20px padding, optional 14px to 16px green icon. Hover fills Leaf Wash (160ms, gentle ease). Used for "Work with me", downloads, print and browse links.
- **On Green:** White pill, Deep Ink 19px bold label; hover Leaf Wash; 3px white focus outline. The hero pairs it with a transparent white-outlined twin ("Learn More"), whose hover is white at 12%.
- **Back / tertiary:** Text-only pill with a green chevron, hover Leaf Wash.
- **Focus:** 2px sage green outline at 3px offset on everything; 3px white on green surfaces.

### Chips
- **Value jump chips:** Pill, 1.5px sage green border at 40%, 14px semibold Deep Ink; hover full border plus Leaf Wash.
- **Tag chips:** Small pill (13px, 650) on the opposite tone of their card, naming a resource's type.

### Cards / Containers
- **Link Card:** 20px corners, 20px by 22px padding; white on light green sections, Leaf Wash ("tint") on white sections. The resource name is the link: 18px 650 Deep Ink with a half-strength green underline that strengthens on hover, followed by the external arrow. Featured cards add a 2px inset green ring.
- **Sheet:** White, 28px corners, Sheet shadow, 28px by 20px padding growing to 40px by 44px from md.
- **Note block:** Leaf Wash, 16px corners, 16px by 18px padding, a 14px 650 heading and Soft Ink text.
- **Feature panel:** Light green or white block with 20px to 28px corners and 28px to 36px padding for a single grouped call (Resource Library, frameworks).

### Inputs / Fields
- **Answer option:** The quiz's only input. Full-width, 16px corners, 1.5px sage green border at 35%, 17px Deep Ink text, a 22px rounded-square checkbox. Hover makes the border full green; selected (aria-pressed) fills Leaf Wash, adds a 1px inset ring and fills the checkbox green with a white check.

### Navigation
- **Header:** White bar, minimum 64px, 1px green rule at 20% below. Logo plus 17px 650 wordmark on the left.
- **Desktop (lg and up):** 15px medium Muted Ink pill links; hover Leaf Wash and Deep Ink; current page in Deep Ink with a 2px green underline at 9px offset. A green-outlined "Work with Jessica" pill with an external arrow closes the row.
- **Mobile (below lg):** A 44px outlined circular menu button (Bars3 / XMark) opens a 240px white menu with 16px corners, Sheet shadow, a 20% green ring, and 16px items whose current page is semibold on Leaf Wash. It scales in from 95% over 160ms.

### Step Path
Numbered 48px white circles with a 2px green border and 20px bold tabular figures, joined by a 2px green line at 45%: vertical on mobile, horizontal from md. Each step has a 21px 650 title and 17px body.

### Quiz Callout
A full-bleed sage green band, 96px vertical padding, 720px column: a white headline, 19px bold white body, and an On Green button that reads "Take" or "Continue" depending on quiz state. It closes every content page.

### Quiz Progress
A 15px semibold count ("4 of 20 questions") above 20 equal 6px pill segments, filled green when answered and green at 18% when not; the current question carries a 1.5px Deep Ink ring.

### Ranked Value Rows
Expandable rows (18px corners) with a numbered circle badge, the value name, points and a green chevron that rotates 180 degrees, over a green score bar. The top value is promoted: Leaf Wash fill, full green border plus inset ring, a 40px filled green badge, 21px bold name and a thicker bar.

### Icon Badge
A 52px Leaf Wash circle holding a 26px Heroicons 24/outline icon in sage green, used to lead value and benefit lists. UI controls use Heroicons 16/solid at 14px to 18px, tinted green.

### External Arrow
Every link that leaves the site ends with a 14px green Heroicons arrow-up-right, joined to the last word by a non-breaking space so it never wraps alone.

## Do's and Don'ts

### Do:
- **Do** alternate white and light green (#edf8ea) section bands, and end content pages on the green Quiz Callout.
- **Do** set white text on green only at 19px bold or larger.
- **Do** make text links Deep Ink with a 1.5px green underline at 5px offset that thickens to 2.5px on hover.
- **Do** make every pressable control a pill, with a 2px green focus outline at 3px offset.
- **Do** use Heroicons only: 24/outline in light green circles for value and benefit lists, 16/solid tinted green for UI.
- **Do** mark external links with the External Arrow, kept on the last word's line.
- **Do** keep reading columns at 680px to 720px and body text at 17px, 1.65 line height, Muted Ink.
- **Do** use the gentle ease (cubic-bezier(0.16, 1, 0.3, 1)) at 160ms to 200ms for hover and state changes.

### Don't:
- **Don't** put small or regular-weight text on sage green, or set running text or links in green.
- **Don't** introduce colours beyond the fixed green, light green, white and the ink ramp.
- **Don't** add eyebrow or kicker labels above headings, or uppercase letter-spaced labels anywhere.
- **Don't** use coloured border-left callouts; use a Leaf Wash note block instead.
- **Don't** use glass, blur or translucent frosted panels.
- **Don't** use emoji or unicode arrows as icons.
- **Don't** give cards, rows or buttons drop shadows; shadows belong to sheets, panels, menus and photos.
- **Don't** add a second typeface or system display face.
