# Thesis Front End


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


## First Stage

### Landing page with scrolly-features
- [ ] Resources
    - https://ig.ft.com/sites/special-reports/one-belt-one-road/
    - https://pudding.cool/2017/01/making-it-big/
    - https://sonuum.com/
    - https://pudding.cool/process/responsive-scrollytelling/
- [ ] Setup elements - HTML
    - [ ] Text scroll through (w/ headlines)
        - [ ] Appr. time needed
        - [ ] Describe elements one-by-one
        - [ ] Progress bar description
        - [ ] Selection of values (only slider for now)
        - [ ] Ability to toggle marker
        - [ ] Start button
    - [ ] Map div
    - [ ] Value-picker
- [ ] Base styling
    - [ ] Theme - BAM
    - [ ] CSS reset
    - [ ] Base unit setup
    - [ ] Placement all elements large/small screens
- [ ] Scrolly
    - [ ] Override scroll on map-div
    - [ ] Fade out other layers based on focus
    - [ ] Fade out other layers based on focus
- [ ] Warning not ideal size - desktop browser or rotate

### Form for subject data 
- [ ] placeholder (only click-through and progression)

### Progression 
- [ ] Progression indicator
- [ ] Form -> Slider
- [ ]Basic browser-side timer framework (on-load of images, and some events)
- [ ] Hard-coded progression
- [ ] Maybe later <strike>Form -> Alpha picker (broad range of backgrounds)) - 2nd step</strike>

### User acceptance form of viz types after progression
- [ ] Smaller pictures of viz types
- [ ] User input of ratings 

### Testing
- [ ] Testing framework or manual for browsers/sizes and using friends for input

## Second Stage (After back-end setup)