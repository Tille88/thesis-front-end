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
    - [ ] **ONGOING** Fade out other layers based on focus - active marker may need outline highlight
        - [ ] Ensure trigger points as expected
    - [ ] Button design LARGE + regular
- [ ] Clean up and make it look as for distribution
    - [x] <strike>Placement all elements small screen</strike>
    - [ ] Change elements for real versions:
        - [ ] Working slider https://pudding.cool/2020/10/photo-history/
    - [ ] Placement of map working and test browsers+screen sizes
    - [x] Override scroll on map-div needed? = NO


### <strike>Form for subject data</strike>
- [ ] **Can't think of any variables of interest** <strike>placeholder (only click-through and progression)</strike>

### Progression 
- [ ] Progression indicator (working all way from intro page)
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
- [ ] Progression indicator as expected (working)

## Second Stage (After back-end setup)


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


