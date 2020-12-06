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

Full image load
Slider + Submit
Submit inactive until slider change
Timer - reset and msPassed
Logger (both console + to backend)
Navigator info and others...
Throttle
On resize end (need to know size of image for events)
css refactoring core+ other pages


- [ ] Form -> Slider
- [ ]Basic browser-side timer framework (on-load of images, and some events)
    - [ ] Image full load ensured
- [ ] Hard-coded progression
- [ ] Maybe later <strike>Form -> Alpha picker (broad range of backgrounds)) - 2nd step</strike>

### User acceptance form of viz types after progression
- [ ] Smaller pictures of viz types
- [ ] User input of ratings 

### Testing
- [ ] Testing framework or manual for browsers/sizes and using friends for input
- [ ] Progression indicator (working all way from intro page)
- [ ] Trigger points working as expected -> remove helper lines

## Second Stage (After back-end setup)
...
- [ ] Cleanup code (incl. CSS taken from pudding)

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


