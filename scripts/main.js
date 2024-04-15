import { series } from './data.js';
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="series"
var averageSeasonsElm = document.getElementById("averageSeasons");
renderSeriesInTable(series);
averageSeasonsElm.innerHTML = "".concat(getAverageNumSeasons(series));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.id, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageNumSeasons(series) {
    var totalSeasons = series.reduce(function (sum, c) { return sum + c.seasons; }, 0);
    var averageSeasons = totalSeasons / series.length;
    return averageSeasons;
}
