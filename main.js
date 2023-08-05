(()=>{"use strict";const t=(()=>{const t=document.querySelector("input"),e=document.getElementById("location"),n=document.getElementById("temperature"),o=document.getElementById("condition"),i=document.getElementById("feels-like"),r=document.getElementById("humidity"),a=document.getElementById("wind"),c=document.getElementById("wind-direction"),d=document.getElementById("precipitation"),l=document.getElementById("last-updated"),u=document.getElementById("error"),s=document.getElementById("toggle-units");function m(){t.value=""}function p(t,e=""){t?(u.textContent=e,u.style.display="block"):u.style.display="none"}return{updateDisplay:function(t,u){var g;m(),p(!1),g=u,s.textContent="Metric"===g?"Imperial":"Metric";const{location:y,current:h}=t;e.textContent=`${y.name}, ${y.region}, ${y.country}`,o.textContent=h.condition.text,r.textContent=`Humidity: ${h.humidity}`,c.textContent=`Wind Direction: ${h.wind_dir}`,l.textContent=`Last Updated: ${h.last_updated}`,n.textContent="Metric"===u?`${h.temp_c} °C`:`${h.temp_f} °F`,a.textContent="Metric"===u?`Wind: ${h.wind_kph} kph`:`Wind: ${h.wind_mph} mph`,i.textContent="Metric"===u?`Feels Like: ${h.feelslike_c} °C`:`Feels Like: ${h.feelslike_f} °F`,d.textContent="Metric"===u?`Precipitation: ${h.precip_mm} mm`:`Precipitation: ${h.precip_in} in`},resetInput:m,toggleError:p}})(),e=function(){return new Promise(((t,e)=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition((e=>{const{latitude:n,longitude:o}=e.coords;t([n,o])}),(()=>{t(null)})):e(new Error("Geolocation is not available in this browser."))}))},n=(()=>{const o=document.querySelector("form"),i=document.getElementById("current-location"),r=document.getElementById("toggle-units"),a=document.getElementById("location");let c="Metric";async function d(e){try{const t=await fetch(`https://api.weatherapi.com/v1/current.json?key=fda6ad22a48445cabbe213714230208&q=${e}`,{mode:"cors"});return await t.json()}catch(e){throw t.toggleError(!0,e.message),e}}return o.addEventListener("submit",(e=>{e.preventDefault();const n=e.target.querySelector("input").value;n&&d(n).then((e=>{try{t.updateDisplay(e,c)}catch{t.toggleError(!0,e.error.message)}}))})),i.addEventListener("click",(async()=>{const[o,i]=await e();n.getWeatherData(`${o},${i}`).then((e=>{t.updateDisplay(e,c)}))})),r.addEventListener("click",(()=>{c="Metric"===c?"Imperial":"Metric",n.getWeatherData(a.textContent).then((e=>{t.updateDisplay(e,c)}))})),{getWeatherData:d}})(),o=n;e().then((e=>{if(e){const[n,i]=[e[0],e[1]];o.getWeatherData(`${n},${i}`).then((e=>{t.updateDisplay(e,"Metric")}))}else o.getWeatherData("toronto").then((e=>{t.updateDisplay(e,"Metric")}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUEyRUEsRUEzRVksTUFDVixNQUFNQSxFQUFRQyxTQUFTQyxjQUFjLFNBQy9CQyxFQUFvQkYsU0FBU0csZUFBZSxZQUM1Q0MsRUFBdUJKLFNBQVNHLGVBQWUsZUFDL0NFLEVBQXFCTCxTQUFTRyxlQUFlLGFBQzdDRyxFQUFxQk4sU0FBU0csZUFBZSxjQUM3Q0ksRUFBb0JQLFNBQVNHLGVBQWUsWUFDNUNLLEVBQWdCUixTQUFTRyxlQUFlLFFBQ3hDTSxFQUF5QlQsU0FBU0csZUFBZSxrQkFDakRPLEVBQXlCVixTQUFTRyxlQUFlLGlCQUNqRFEsRUFBdUJYLFNBQVNHLGVBQWUsZ0JBQy9DUyxFQUFlWixTQUFTRyxlQUFlLFNBQ3ZDVSxFQUFvQmIsU0FBU0csZUFBZSxnQkFFbEQsU0FBU1csSUFDUGYsRUFBTWdCLE1BQVEsRUFDaEIsQ0FFQSxTQUFTQyxFQUFZQyxFQUFXQyxFQUFVLElBQ3BDRCxHQUNGTCxFQUFhTyxZQUFjRCxFQUMzQk4sRUFBYVEsTUFBTUMsUUFBVSxTQUU3QlQsRUFBYVEsTUFBTUMsUUFBVSxNQUVqQyxDQStDQSxNQUFPLENBQUVDLGNBbENULFNBQXVCQyxFQUFhQyxHQUxwQyxJQUFrQ0MsRUFMaENYLElBQ0FFLEdBQVksR0FJb0JTLEVBVVBELEVBVHpCWCxFQUFrQk0sWUFDQyxXQUFqQk0sRUFBNEIsV0FBYSxTQVUzQyxNQUFNLFNBQUVDLEVBQVEsUUFBRUMsR0FBWUosRUFFOUJyQixFQUFrQmlCLFlBQWMsR0FBR08sRUFBU0UsU0FBU0YsRUFBU0csV0FBV0gsRUFBU0ksVUFDbEZ6QixFQUFtQmMsWUFBY1EsRUFBUUksVUFBVUMsS0FDbkR6QixFQUFrQlksWUFBYyxhQUFhUSxFQUFRTSxXQUNyRHhCLEVBQXVCVSxZQUFjLG1CQUFtQlEsRUFBUU8sV0FDaEV2QixFQUFxQlEsWUFBYyxpQkFBaUJRLEVBQVFRLGVBRTVEL0IsRUFBcUJlLFlBQ1YsV0FBVEssRUFBb0IsR0FBR0csRUFBUVMsWUFBYyxHQUFHVCxFQUFRVSxZQUUxRDdCLEVBQWNXLFlBQ0gsV0FBVEssRUFDSSxTQUFTRyxFQUFRVyxlQUNqQixTQUFTWCxFQUFRWSxlQUV2QmpDLEVBQW1CYSxZQUNSLFdBQVRLLEVBQ0ksZUFBZUcsRUFBUWEsaUJBQ3ZCLGVBQWViLEVBQVFjLGlCQUU3Qi9CLEVBQXVCUyxZQUNaLFdBQVRLLEVBQ0ksa0JBQWtCRyxFQUFRZSxlQUMxQixrQkFBa0JmLEVBQVFnQixjQUNsQyxFQUV3QjdCLGFBQVlFLGNBQ3JDLEVBekVXLEdDd0JaLEVBdkJFLFdBQ0UsT0FBTyxJQUFJNEIsU0FBUSxDQUFDQyxFQUFTQyxLQUN2QixnQkFBaUJDLFVBQ25CQSxVQUFVQyxZQUFZQyxvQkFDbkJDLElBRUMsTUFBTSxTQUFFQyxFQUFRLFVBQUVDLEdBQWNGLEVBQVNHLE9BQ3pDUixFQUFRLENBQUNNLEVBQVVDLEdBQVcsSUFFaEMsS0FFRVAsRUFBUSxLQUFLLElBSWpCQyxFQUFPLElBQUlRLE1BQU0saURBQ25CLEdBRUosRUNoQklDLEVBQU0sTUFDVixNQUFNQyxFQUFPeEQsU0FBU0MsY0FBYyxRQUM5QndELEVBQXdCekQsU0FBU0csZUFBZSxvQkFDaERVLEVBQW9CYixTQUFTRyxlQUFlLGdCQUM1Q3VCLEVBQVcxQixTQUFTRyxlQUFlLFlBR3pDLElBQUl1RCxFQUFRLFNBU1pDLGVBQWVDLEVBQWVsQyxHQUM1QixJQUNFLE1BQU1tQyxRQUFpQkMsTUFDckIsb0ZBQW9GcEMsSUFDcEYsQ0FBRXFDLEtBQU0sU0FHVixhQURtQkYsRUFBU0csTUFFOUIsQ0FBRSxNQUFPQyxHQUVQLE1BREEsRUFBSWpELGFBQVksRUFBTWlELEVBQU0vQyxTQUN0QitDLENBQ1IsQ0FDRixDQWlDQSxPQS9CQVQsRUFBS1UsaUJBQWlCLFVBQVdDLElBQy9CQSxFQUFFQyxpQkFDRixNQUFNckUsRUFBUW9FLEVBQUVFLE9BQU9wRSxjQUFjLFNBQVNjLE1BQzFDaEIsR0FDRjZELEVBQWU3RCxHQUFPdUUsTUFBTUMsSUFDMUIsSUFFRSxFQUFJakQsY0FBY2lELEVBQU1iLEVBQzFCLENBQUUsTUFFQSxFQUFJMUMsYUFBWSxFQUFNdUQsRUFBS04sTUFBTS9DLFFBQ25DLElBRUosSUFHRnVDLEVBQXNCUyxpQkFBaUIsU0FBU1AsVUFDOUMsTUFBT1IsRUFBVUMsU0FBbUIsSUFFcENHLEVBQUlLLGVBQWUsR0FBR1QsS0FBWUMsS0FBYWtCLE1BQU1DLElBQ25ELEVBQUlqRCxjQUFjaUQsRUFBTWIsRUFBTSxHQUM5QixJQUdKN0MsRUFBa0JxRCxpQkFBaUIsU0FBUyxLQTNDMUNSLEVBQWtCLFdBQVZBLEVBQXFCLFdBQWEsU0E2QzFDSCxFQUFJSyxlQUFlbEMsRUFBU1AsYUFBYW1ELE1BQU1DLElBQzdDLEVBQUlqRCxjQUFjaUQsRUFBTWIsRUFBTSxHQUM5QixJQUdHLENBQUVFLGlCQUNWLEVBOURXLEdBZ0VaLElDOURBLElBQTBCVSxNQUFNRSxJQUU5QixHQUFJQSxFQUFhLENBQ2YsTUFBT3JCLEVBQVVDLEdBQWEsQ0FBQ29CLEVBQVksR0FBSUEsRUFBWSxJQUUzRCxFQUFJWixlQUFlLEdBQUdULEtBQVlDLEtBQWFrQixNQUFNQyxJQUNuRCxFQUFJakQsY0FBY2lELEVBQU0sU0FBUyxHQUVyQyxNQUNFLEVBQUlYLGVBQWUsV0FBV1UsTUFBTUMsSUFDbEMsRUFBSWpELGNBQWNpRCxFQUFNLFNBQVMsR0FFckMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9sb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRE9NID0gKCgpID0+IHtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XHJcbiAgY29uc3QgdGVtcGVyYXR1cmVDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBlcmF0dXJlXCIpO1xyXG4gIGNvbnN0IGNvbmRpdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29uZGl0aW9uXCIpO1xyXG4gIGNvbnN0IGZlZWxzTGlrZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHMtbGlrZVwiKTtcclxuICBjb25zdCBodW1pZGl0eUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XHJcbiAgY29uc3Qgd2luZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZFwiKTtcclxuICBjb25zdCB3aW5kRGlyZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kLWRpcmVjdGlvblwiKTtcclxuICBjb25zdCBwcmVjaXBpdGF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmVjaXBpdGF0aW9uXCIpO1xyXG4gIGNvbnN0IGxhc3RVcGRhdGVkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsYXN0LXVwZGF0ZWRcIik7XHJcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlcnJvclwiKTtcclxuICBjb25zdCB0b2dnbGVVbml0c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLXVuaXRzXCIpO1xyXG5cclxuICBmdW5jdGlvbiByZXNldElucHV0KCkge1xyXG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlRXJyb3Ioc2hvd0Vycm9yLCBtZXNzYWdlID0gXCJcIikge1xyXG4gICAgaWYgKHNob3dFcnJvcikge1xyXG4gICAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4gICAgICBlcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbGVhckZpZWxkcygpIHtcclxuICAgIHJlc2V0SW5wdXQoKTtcclxuICAgIHRvZ2dsZUVycm9yKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIC8vIHRvZ2dsZSB1bml0cyBidXR0b24gdGV4dCBzaG91bGQgYmUgb3Bwb3NpdGUgdG8gd2hhdCBpcyBjdXJyZW50bHkgc2VsZWN0ZWRcclxuICBmdW5jdGlvbiBzZXRUb2dnbGVVbml0c0J1dHRvblRleHQoc2VsZWN0ZWRVbml0KSB7XHJcbiAgICB0b2dnbGVVbml0c0J1dHRvbi50ZXh0Q29udGVudCA9XHJcbiAgICAgIHNlbGVjdGVkVW5pdCA9PT0gXCJNZXRyaWNcIiA/IFwiSW1wZXJpYWxcIiA6IFwiTWV0cmljXCI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KHdlYXRoZXJEYXRhLCB1bml0KSB7XHJcbiAgICAvLyBjbGVhciBleGlzdGluZyBmaWVsZHNcclxuICAgIGNsZWFyRmllbGRzKCk7XHJcblxyXG4gICAgLy8gdXBkYXRlIHRvZ2dsZSB1bml0cyBidXR0b25cclxuICAgIHNldFRvZ2dsZVVuaXRzQnV0dG9uVGV4dCh1bml0KTtcclxuXHJcbiAgICBjb25zdCB7IGxvY2F0aW9uLCBjdXJyZW50IH0gPSB3ZWF0aGVyRGF0YTtcclxuXHJcbiAgICBsb2NhdGlvbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IGAke2xvY2F0aW9uLm5hbWV9LCAke2xvY2F0aW9uLnJlZ2lvbn0sICR7bG9jYXRpb24uY291bnRyeX1gO1xyXG4gICAgY29uZGl0aW9uQ29udGFpbmVyLnRleHRDb250ZW50ID0gY3VycmVudC5jb25kaXRpb24udGV4dDtcclxuICAgIGh1bWlkaXR5Q29udGFpbmVyLnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2N1cnJlbnQuaHVtaWRpdHl9YDtcclxuICAgIHdpbmREaXJlY3Rpb25Db250YWluZXIudGV4dENvbnRlbnQgPSBgV2luZCBEaXJlY3Rpb246ICR7Y3VycmVudC53aW5kX2Rpcn1gO1xyXG4gICAgbGFzdFVwZGF0ZWRDb250YWluZXIudGV4dENvbnRlbnQgPSBgTGFzdCBVcGRhdGVkOiAke2N1cnJlbnQubGFzdF91cGRhdGVkfWA7XHJcblxyXG4gICAgdGVtcGVyYXR1cmVDb250YWluZXIudGV4dENvbnRlbnQgPVxyXG4gICAgICB1bml0ID09PSBcIk1ldHJpY1wiID8gYCR7Y3VycmVudC50ZW1wX2N9IMKwQ2AgOiBgJHtjdXJyZW50LnRlbXBfZn0gwrBGYDtcclxuXHJcbiAgICB3aW5kQ29udGFpbmVyLnRleHRDb250ZW50ID1cclxuICAgICAgdW5pdCA9PT0gXCJNZXRyaWNcIlxyXG4gICAgICAgID8gYFdpbmQ6ICR7Y3VycmVudC53aW5kX2twaH0ga3BoYFxyXG4gICAgICAgIDogYFdpbmQ6ICR7Y3VycmVudC53aW5kX21waH0gbXBoYDtcclxuXHJcbiAgICBmZWVsc0xpa2VDb250YWluZXIudGV4dENvbnRlbnQgPVxyXG4gICAgICB1bml0ID09PSBcIk1ldHJpY1wiXHJcbiAgICAgICAgPyBgRmVlbHMgTGlrZTogJHtjdXJyZW50LmZlZWxzbGlrZV9jfSDCsENgXHJcbiAgICAgICAgOiBgRmVlbHMgTGlrZTogJHtjdXJyZW50LmZlZWxzbGlrZV9mfSDCsEZgO1xyXG5cclxuICAgIHByZWNpcGl0YXRpb25Db250YWluZXIudGV4dENvbnRlbnQgPVxyXG4gICAgICB1bml0ID09PSBcIk1ldHJpY1wiXHJcbiAgICAgICAgPyBgUHJlY2lwaXRhdGlvbjogJHtjdXJyZW50LnByZWNpcF9tbX0gbW1gXHJcbiAgICAgICAgOiBgUHJlY2lwaXRhdGlvbjogJHtjdXJyZW50LnByZWNpcF9pbn0gaW5gO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgdXBkYXRlRGlzcGxheSwgcmVzZXRJbnB1dCwgdG9nZ2xlRXJyb3IgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERPTTtcclxuIiwiY29uc3QgTG9jYXRpb24gPSAoKCkgPT4ge1xyXG4gIGZ1bmN0aW9uIGdldENvb3JkaW5hdGVzKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgaWYgKFwiZ2VvbG9jYXRpb25cIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICAgICAgKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFJldHJpZXZlIHRoZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIGNvb3JkaW5hdGVzXHJcbiAgICAgICAgICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gcG9zaXRpb24uY29vcmRzO1xyXG4gICAgICAgICAgICByZXNvbHZlKFtsYXRpdHVkZSwgbG9uZ2l0dWRlXSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBTZXQgcmVzb2x2ZSBwYXJhbWV0ZXIgdG8gbnVsbCBpZiB1bmFibGUgdG8gZ2V0IGNvb3JkaW5hdGVzXHJcbiAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZWplY3QobmV3IEVycm9yKFwiR2VvbG9jYXRpb24gaXMgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGJyb3dzZXIuXCIpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBnZXRDb29yZGluYXRlcyB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb247XHJcbiIsImltcG9ydCBET00gZnJvbSBcIi4vZG9tXCI7XHJcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi9sb2NhdGlvblwiO1xyXG5cclxuY29uc3QgQXBwID0gKCgpID0+IHtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XHJcbiAgY29uc3QgY3VycmVudExvY2F0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LWxvY2F0aW9uXCIpO1xyXG4gIGNvbnN0IHRvZ2dsZVVuaXRzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtdW5pdHNcIik7XHJcbiAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xyXG5cclxuICAvLyB1bml0cyBhcmUgc2V0IGFzIG1ldHJpYyBieSBkZWZhdWx0XHJcbiAgbGV0IHVuaXRzID0gXCJNZXRyaWNcIjtcclxuXHJcbiAgLy8gdG9nZ2xlIHVuaXRzXHJcbiAgZnVuY3Rpb24gdG9nZ2xlVW5pdHMoKSB7XHJcbiAgICB1bml0cyA9IHVuaXRzID09PSBcIk1ldHJpY1wiID8gXCJJbXBlcmlhbFwiIDogXCJNZXRyaWNcIjtcclxuICB9XHJcblxyXG4gIC8vIGdldHMgd2VhdGhlciBkYXRhIGJhc2VkIG9uIGNpdHkvcHJvdmluY2UvY291bnRyeSBvciBjb29yZGluYXRlc1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcclxuICBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT1mZGE2YWQyMmE0ODQ0NWNhYmJlMjEzNzE0MjMwMjA4JnE9JHtsb2NhdGlvbn1gLFxyXG4gICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIERPTS50b2dnbGVFcnJvcih0cnVlLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGlucHV0ID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLnZhbHVlO1xyXG4gICAgaWYgKGlucHV0KSB7XHJcbiAgICAgIGdldFdlYXRoZXJEYXRhKGlucHV0KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIC8vIHVwZGF0ZSBkaXNwbGF5XHJcbiAgICAgICAgICBET00udXBkYXRlRGlzcGxheShkYXRhLCB1bml0cyk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAvLyBkaXNwbGF5IGVycm9yIG1lc3NhZ2VcclxuICAgICAgICAgIERPTS50b2dnbGVFcnJvcih0cnVlLCBkYXRhLmVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGN1cnJlbnRMb2NhdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgW2xhdGl0dWRlLCBsb25naXR1ZGVdID0gYXdhaXQgTG9jYXRpb24uZ2V0Q29vcmRpbmF0ZXMoKTtcclxuXHJcbiAgICBBcHAuZ2V0V2VhdGhlckRhdGEoYCR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfWApLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgRE9NLnVwZGF0ZURpc3BsYXkoZGF0YSwgdW5pdHMpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHRvZ2dsZVVuaXRzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB0b2dnbGVVbml0cygpO1xyXG4gICAgQXBwLmdldFdlYXRoZXJEYXRhKGxvY2F0aW9uLnRleHRDb250ZW50KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIERPTS51cGRhdGVEaXNwbGF5KGRhdGEsIHVuaXRzKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBnZXRXZWF0aGVyRGF0YSB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgQXBwIGZyb20gXCIuL2FwcFwiO1xyXG5pbXBvcnQgRE9NIGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4vbG9jYXRpb25cIjtcclxuXHJcbi8vIGdldCBjb29yZGluYXRlcyB1c2luZyBHZW9Mb2NhdGlvbiBBUEkgYW5kIHVzZSB0aG9zZSBjb29yZHMgdG8gc2V0IGRlZmF1bHQgbG9jYXRpb24gb24gcGFnZSBsb2FkICh1bml0cyB3aWxsIGJlIG1ldHJpYyBvbiBkZWZhdWx0KVxyXG5Mb2NhdGlvbi5nZXRDb29yZGluYXRlcygpLnRoZW4oKGNvb3JkaW5hdGVzKSA9PiB7XHJcbiAgLy8gaWYgY29vcmRpbmF0ZXMgd2VyZSBmb3VuZCwgc2VhcmNoIHdpdGggdGhlbSwgb3RoZXJ3aXNlLCBzZWFyY2ggZm9yIGEgJ2RlZmF1bHQnIGxvY2F0aW9uXHJcbiAgaWYgKGNvb3JkaW5hdGVzKSB7XHJcbiAgICBjb25zdCBbbGF0aXR1ZGUsIGxvbmdpdHVkZV0gPSBbY29vcmRpbmF0ZXNbMF0sIGNvb3JkaW5hdGVzWzFdXTtcclxuXHJcbiAgICBBcHAuZ2V0V2VhdGhlckRhdGEoYCR7bGF0aXR1ZGV9LCR7bG9uZ2l0dWRlfWApLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgRE9NLnVwZGF0ZURpc3BsYXkoZGF0YSwgXCJNZXRyaWNcIik7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgQXBwLmdldFdlYXRoZXJEYXRhKFwidG9yb250b1wiKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgIERPTS51cGRhdGVEaXNwbGF5KGRhdGEsIFwiTWV0cmljXCIpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuIl0sIm5hbWVzIjpbImlucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibG9jYXRpb25Db250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsInRlbXBlcmF0dXJlQ29udGFpbmVyIiwiY29uZGl0aW9uQ29udGFpbmVyIiwiZmVlbHNMaWtlQ29udGFpbmVyIiwiaHVtaWRpdHlDb250YWluZXIiLCJ3aW5kQ29udGFpbmVyIiwid2luZERpcmVjdGlvbkNvbnRhaW5lciIsInByZWNpcGl0YXRpb25Db250YWluZXIiLCJsYXN0VXBkYXRlZENvbnRhaW5lciIsImVycm9yTWVzc2FnZSIsInRvZ2dsZVVuaXRzQnV0dG9uIiwicmVzZXRJbnB1dCIsInZhbHVlIiwidG9nZ2xlRXJyb3IiLCJzaG93RXJyb3IiLCJtZXNzYWdlIiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJ1cGRhdGVEaXNwbGF5Iiwid2VhdGhlckRhdGEiLCJ1bml0Iiwic2VsZWN0ZWRVbml0IiwibG9jYXRpb24iLCJjdXJyZW50IiwibmFtZSIsInJlZ2lvbiIsImNvdW50cnkiLCJjb25kaXRpb24iLCJ0ZXh0IiwiaHVtaWRpdHkiLCJ3aW5kX2RpciIsImxhc3RfdXBkYXRlZCIsInRlbXBfYyIsInRlbXBfZiIsIndpbmRfa3BoIiwid2luZF9tcGgiLCJmZWVsc2xpa2VfYyIsImZlZWxzbGlrZV9mIiwicHJlY2lwX21tIiwicHJlY2lwX2luIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJjb29yZHMiLCJFcnJvciIsIkFwcCIsImZvcm0iLCJjdXJyZW50TG9jYXRpb25CdXR0b24iLCJ1bml0cyIsImFzeW5jIiwiZ2V0V2VhdGhlckRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibW9kZSIsImpzb24iLCJlcnJvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ0aGVuIiwiZGF0YSIsImNvb3JkaW5hdGVzIl0sInNvdXJjZVJvb3QiOiIifQ==