# Thesis Front End

## First Stage

### Landing page with scrolly-features
- [x] Resources
    - https://ig.ft.com/sites/special-reports/one-belt-one-road/
    - https://pudding.cool/2017/01/making-it-big/
    - https://sonuum.com/
    - https://pudding.cool/process/responsive-scrollytelling/
    - https://css-tricks.com/rem-global-em-local/
- [x] Setup elements - HTML
    - [x] Text scroll through (w/ headlines)
        - [x] Appr. time needed
        - [x] Describe elements one-by-one
        - [x] Progress bar description
        - [x] Selection of values (only slider for now)
        - [x] Ability to toggle marker
        - [x] Start button
    - [x] Map div
    - [x] Value-picker (temp)
- [x] Base styling
    - [x] Theme
    - [x] CSS reset
    - [x] Base unit setup
    - [x] Placement all elements large screen
- [ ] Scrolly
    - [x] Add in perspective layers
    - [x] **ONGOING** Fade out other layers based on focus - active marker may need outline highlight
        - [x] Ensure trigger points as expected
    - [x] Button design LARGE + regular
- [x] Clean up and make it look as (almost) for distribution
    - [x] <strike>Placement all elements small screen</strike>
    - [x] Change elements for real versions:
        - [x] Placement of map working and test browsers+screen sizes
        - [x] Working slider https://pudding.cool/2020/10/photo-history/ - Placement + styling + number of ticks
    - [x] Override scroll on map-div needed? = NO


### <strike>Form for subject data</strike>
- [x] **Can't think of any variables of interest** <strike>placeholder (only click-through and progression)</strike>

### Progression 
- [x] css refactoring core+ other pages
- [x] Slider + Submit
    - [x] Submit inactive until slider change
- [x] Timer - reset and msPassed
- [x] Form -> Slider
- [x]Basic browser-side timer framework (on-load of images, and some events)
    - [x] Image full load ensured
- [x] Hard-coded progression -> go through
- [x] Maybe later <strike>Form -> Alpha picker (broad range of backgrounds)) - 2nd step</strike>
- [x] Logger (both console + to backend)
- [x] Refactor (intro session+progression, then do user acceptance)

### User acceptance form of viz types after progression
- [x] Smaller pictures of viz types
- [x] User input of ratings 

### Testing
- [x] Testing framework or manual for browsers/sizes and using friends for input
- [ ] REMOVE: Progression indicator (working all way from intro page)

## Second Stage (After back-end setup)
...
- [ ] Placeholder... connect to back-end, get rid of bugs...
- [ ] AFTER STATISTICAL TESTS: add opacity selection mechanism?
- [ ] AFTER STATISTICAL TESTS: Individual results page?
- [ ] AFTER STATISTICAL TESTS: Thank you page?
- [ ] AFTER STATISTICAL TESTS: New user setup - currently only one session per "localstorage"?
- [ ] AFTER STATISTICAL TESTS: Weird slider moves up until image loaded bug...
- [ ] AFTER STATISTICAL TESTS: UUID-gen + randomized progression-gen (front or backend?)...

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

## Running

```sh
node dist/bundle.js
```


