import { Serie } from './serie.js';
import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="series"
const averageSeasonsElm: HTMLElement = document.getElementById("average-seasons")!;

renderSeriesInTable(series);
averageSeasonsElm.innerHTML = `${getAverageNumSeasons(series)}`

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.id}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getAverageNumSeasons(series: Serie[]): number {
    const totalSeasons = series.reduce((sum, c) => sum + c.seasons, 0);
    const averageSeasons = totalSeasons / series.length;
    return averageSeasons;
  }