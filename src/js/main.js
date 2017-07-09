// main.js -------------------------------------

// Colors -----------------------------------------------------
var clickedColor = '#004fff';
var unclickedColor = 'white';

// C3 -----------------------------------------------------

var chart = c3.generate({
  bindto: '#chart',
  padding: {
    right: 20,
    top: 5
  },
  data: {
    x: 'x',
    columns: [
      // ['x', '2012/13', '2013/14', '2014/15', '2015/16', '2016/17'],
      ['x', 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
      ['LeBron James', 29.71, 26.72, 27.15, 26.79, 27.13, 25.26, 25.26, 26.41],
      ['Kevin Durant', 30.15, 27.71, 28.03, 28.15, 32.01, 25.41, 28.18, 25.08],
      ['Russell Westbrook', 16.12, 21.87, 23.61, 23.21, 21.78, 28.15, 23.48, 31.58],
      ['Stephen Curry', 17.49, 18.55, 14.73, 22.90, 24.01, 23.75, 30.06, 25.30],
      ['Dirk Nowitzki', 25.02, 23.03, 21.65, 17.30, 21.69, 17.31, 18.29, 14.24]
    ]
  },
  axis: {
    x: {
      label: 'Year',
    }
  }
});

// functions to change chart -----------------------------------------------------
function showPoints() {
  chart.load({
    columns: [
      ['LeBron James', 29.71, 26.72, 27.15, 26.79, 27.13, 25.26, 25.26, 26.41],
      ['Kevin Durant', 30.15, 27.71, 28.03, 28.15, 32.01, 25.41, 28.18, 25.08],
      ['Russell Westbrook', 16.12, 21.87, 23.61, 23.21, 21.78, 28.15, 23.48, 31.58],
      ['Stephen Curry', 17.49, 18.55, 14.73, 22.90, 24.01, 23.75, 30.06, 25.30],
      ['Dirk Nowitzki', 25.02, 23.03, 21.65, 17.30, 21.69, 17.31, 18.29, 14.24]
    ]
  });
  $('#pointsBtn').focus();
}

function showRebounds() {
  chart.load({
    columns: [
      ['LeBron James', 7.29, 7.47, 7.94, 8.03, 6.92, 6.03, 7.43, 8.66],
      ['Kevin Durant', 7.60, 6.83, 7.98, 7.90, 7.38, 6.59, 8.18, 8.27],
      ['Russell Westbrook', 4.89, 4.62, 4.56, 5.22, 5.72, 7.28, 7.83, 10.72],
      ['Stephen Curry', 4.45, 3.86, 3.38, 4.03, 4.28, 4.26, 5.44, 4.48],
      ['Dirk Nowitzki', 7.65, 7.03, 6.76, 6.85, 6.22, 5.94, 6.52, 6.50]
    ]
  });
  $('#reboundsBtn').focus();
}

function showAssists() {
  chart.load({
    columns: [
      ['LeBron James', 8.57, 7.01, 6.24, 7.25, 6.34, 7.41, 6.76, 8.73],
      ['Kevin Durant', 2.82, 2.74, 3.50, 4.62, 5.49, 4.07, 5.01, 4.85],
      ['Russell Westbrook', 7.95, 8.17, 5.50, 7.40, 6.93, 8.57, 10.43, 10.38],
      ['Stephen Curry', 5.90, 5.84, 5.31, 6.90, 8.55, 7.74, 6.67, 6.62],
      ['Dirk Nowitzki', 2.69, 2.60, 2.19, 2.49, 2.70, 1.86, 1.76, 1.52]
    ]
  });
  $('#assistsBtn').focus();
}

function showSteals() {
  chart.load({
    columns: [
      ['LeBron James', 1.64, 1.57, 1.85, 1.70, 1.57, 1.58, 1.37, 1.23],
      ['Kevin Durant', 1.37, 1.13, 1.33, 1.43, 1.27, 0.89, 0.96, 1.08],
      ['Russell Westbrook', 1.32, 1.89, 1.70, 1.77, 1.91, 2.09, 2.04, 1.67],
      ['Stephen Curry', 1.90, 1.47, 1.50, 1.62, 1.64, 2.04, 2.14, 1.81],
      ['Dirk Nowitzki', 0.86, 0.52, 0.68, 0.70, 0.91, 0.51, 0.69, 0.56]
    ]
  });
  $('#stealsBtn').focus();
}

function showBlocks() {
  chart.load({
    columns: [
      ['LeBron James', 1.15, 1.01, 0.63, 0.81, 0.88, 0.34, 0.71, 0.64, 0.58],
      ['Kevin Durant', 1.02, 0.97, 1.17, 1.30, 0.73, 0.93, 1.18, 1.60],
      ['Russell Westbrook', 0.41, 0.37, 0.30, 0.29, 0.15, 0.21, 0.25, 0.38],
      ['Stephen Curry', 0.24, 0.27, 0.31, 0.15, 0.18, 0.20, 0.19, 0.23],
      ['Dirk Nowitzki', 0.98, 0.64, 0.48, 0.70, 0.56, 0.43, 0.69, 0.70]
    ]
  });
  $('#blocksBtn').focus();
}


// focus first button -----------------------------------------------------
$('#pointsBtn').focus();

// page loaded animation -----------------------------------------------------
setTimeout(showRebounds, 500);
setTimeout(showAssists, 1000);
setTimeout(showSteals, 1500);
setTimeout(showBlocks, 2000);
setTimeout(showPoints, 2500);
