var Data;

var table = d3.select('#graph')
  .append('table')
  .attr('class', 'table');

var thead = table.append('thead');
var tbody = table.append('tbody');

var reload = function(){
  d3.csv('villains.csv', function(data){
    Data = data;
    redraw();
  });
};
reload();

var redraw = function(){
  var tr = tbody.selectAll('tr')
                .data(Data);

    tr.enter()
      .append('tr');

    tr.exit()
      .remove();

    tr.selectAll('td')
      .data(function(d) {return d3.values(d); })
      .enter()
      .append('td')
      .text(function(d) {return d; })

    tbody.selectAll('tr')
    .sort(function (a, b) { return d3.ascending(a['Year first'], b['Year first']); });

    tbody.selectAll('tr').sort(function (a, b) {
    return d3.descending(Number(a['Doc. no.']), Number(b['Doc. no.'])); });

    Data = Data.filter(function (d) { return d['Doctor actor'] == 'Matt Smith'; })
    redraw()

    tbody.selectAll('tr')
    .filter(function (d) { return d['Doctor actor'] != 'Matt Smith'; })
    .remove()
};
