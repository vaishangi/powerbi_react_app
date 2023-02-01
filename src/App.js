import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import {models } from 'powerbi-client'

function App() {
  return (
    <div className="App">
      <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
			  <PowerBIEmbed
				  embedConfig={{
					  type: 'report',   // Supported types: report, dashboard, tile, visual and qna
					  id: '13ac2e9d-166e-469f-949d-32b9146fbed5',
					  embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=13ac2e9d-166e-469f-949d-32b9146fbed5&groupId=ee24cd9b-d0e3-43ca-9b0f-86e7772899f2&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19>',
					  accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTA3OTNkMzktMDkzOS00OTZkLWIxMjktMTk4ZWRkOTE2ZmViLyIsImlhdCI6MTY3NTIyNzQzOSwibmJmIjoxNjc1MjI3NDM5LCJleHAiOjE2NzUyMzI3NjAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUE5YllQRHJDY09IVzdmV01yOGM0QkEvV1VnT21EcVdCajd5SGh3ZGNyeWN6YmhmMklHL2FHMlR3SU91c3BTRE14SURiVjBkUnV2alRZUmlUTC9sbWJXanZiR1VoNXE2Q3RKWmdha2llQlJGST0iLCJhbXIiOlsicnNhIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiY29udHJvbHMiOlsiYXBwX3JlcyJdLCJjb250cm9sc19hdWRzIjpbIjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCJdLCJkZXZpY2VpZCI6ImRhZDM1NmMyLTk4ZmEtNDAyMC04NGVhLTkxM2JhZTI1NDRlMSIsImZhbWlseV9uYW1lIjoiQmFqcGFpIiwiZ2l2ZW5fbmFtZSI6IlZhaXNoYW5naSIsImlwYWRkciI6IjEyMi4xNjEuNzkuMjMiLCJuYW1lIjoiQmFqcGFpLCBWYWlzaGFuZ2kiLCJvaWQiOiI0YmIxYjU2NC1jYjQ3LTQ4NDctODdiZi01MDE1NDY0N2IxYjMiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMzI5MDY4MTUyLTE0NTQ0NzExNjUtMTQxNzAwMTMzMy0xMTY2NTIwMiIsInB1aWQiOiIxMDAzMjAwMUNBNUJFNjk5IiwicmgiOiIwLkFYc0FPVDE1NERrSmJVbXhLUm1PM1pGdjZ3a0FBQUFBQUFBQXdBQUFBQUFBQUFCN0FOMC4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsiZHZjX21uZ2QiLCJkdmNfY21wIiwiZHZjX2RtamQiLCJrbXNpIl0sInN1YiI6InFpTVB6cElNUFl1cUp4cHhzQUFocWtHay1fS1FfQTUxb3ZpWDBwSGtieGsiLCJ0aWQiOiJlMDc5M2QzOS0wOTM5LTQ5NmQtYjEyOS0xOThlZGQ5MTZmZWIiLCJ1bmlxdWVfbmFtZSI6InZhaXNoYW5naS5iYWpwYWlAYWNjZW50dXJlLmNvbSIsInVwbiI6InZhaXNoYW5naS5iYWpwYWlAYWNjZW50dXJlLmNvbSIsInV0aSI6IjVKNTJfd1lMblVpMlVWekwyNElNQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.byX0MSUSLP24QeR6Ndu5mRtNYV6YdLbnsabjJ4rYSNeTWy36HavO6x0nP6GYp4rYyhcM7RTW33RRnEEUFVeAPsSC5IHXEOGD2bG5NkvdKlVIML0dVZHjZAkbU_tvTGLoFgjo1IL3oEXd8wXu7OrXHJ5HPSAc6Sa-Vrbid_s8BROMDhJdTzsYQWI0_ffCl3IYCE1vB58bEGpv07LyVjgwDXbzGeJluwfhPODBsm1vpbkFqquItjPzueR8DcfLGjv07_Js4104Plgdr8kfO4eFN-dVq-hXDP6-Q89x3teLvP_6cj5hwZDUFD-Qzr7Ftsbn15c4Iv9a3t7JYL6PRxeWiQ',
					  tokenType: models.TokenType.Aad,
					  settings: {
						  panes: {
							  filters: {
								  expanded: false,
								  visible: true
							  }
						  }
					  }
				  }}

				  eventHandlers={
					  new Map([
						  ['loaded', function () { console.log('Report loaded'); }],
						  ['rendered', function () { console.log('Report rendered'); }],
						  ['error', function (event) { console.log(event.detail); }]
					  ])
				  }

				  cssClassName={"Embed-container"}

				  getEmbeddedComponent={(embeddedReport) => {
					  window.report = embeddedReport;
				  }}
			  />
        
      </header>
    </div>
  );
}

export default App;
