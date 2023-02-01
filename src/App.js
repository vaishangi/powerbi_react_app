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
					  accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTA3OTNkMzktMDkzOS00OTZkLWIxMjktMTk4ZWRkOTE2ZmViLyIsImlhdCI6MTY3NTI2MTE3NSwibmJmIjoxNjc1MjYxMTc1LCJleHAiOjE2NzUyNjUzNjksImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUF1bGVDNmNXcEFQN0RwdXBYN2FZRkhYbk96dW1YTXpGVkIrZ005eGV0OEJkOHVCU09wNERGVkpHUTBLVklIeHJ1dkdWakh4bDZlbVBySm1XYmd1NlFhMnVJL3lKaWwvc0JWWEd4aXhGc1Voaz0iLCJhbXIiOlsicnNhIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiY29udHJvbHMiOlsiYXBwX3JlcyJdLCJjb250cm9sc19hdWRzIjpbIjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCJdLCJkZXZpY2VpZCI6ImRhZDM1NmMyLTk4ZmEtNDAyMC04NGVhLTkxM2JhZTI1NDRlMSIsImZhbWlseV9uYW1lIjoiQmFqcGFpIiwiZ2l2ZW5fbmFtZSI6IlZhaXNoYW5naSIsImlwYWRkciI6IjE1Ny4zNy4xNTcuMTI3IiwibmFtZSI6IkJhanBhaSwgVmFpc2hhbmdpIiwib2lkIjoiNGJiMWI1NjQtY2I0Ny00ODQ3LTg3YmYtNTAxNTQ2NDdiMWIzIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTMyOTA2ODE1Mi0xNDU0NDcxMTY1LTE0MTcwMDEzMzMtMTE2NjUyMDIiLCJwdWlkIjoiMTAwMzIwMDFDQTVCRTY5OSIsInJoIjoiMC5BWHNBT1QxNTREa0piVW14S1JtTzNaRnY2d2tBQUFBQUFBQUF3QUFBQUFBQUFBQjdBTjAuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImR2Y19tbmdkIiwiZHZjX2NtcCIsImR2Y19kbWpkIiwia21zaSJdLCJzdWIiOiJxaU1QenBJTVBZdXFKeHB4c0FBaHFrR2stX0tRX0E1MW92aVgwcEhrYnhrIiwidGlkIjoiZTA3OTNkMzktMDkzOS00OTZkLWIxMjktMTk4ZWRkOTE2ZmViIiwidW5pcXVlX25hbWUiOiJ2YWlzaGFuZ2kuYmFqcGFpQGFjY2VudHVyZS5jb20iLCJ1cG4iOiJ2YWlzaGFuZ2kuYmFqcGFpQGFjY2VudHVyZS5jb20iLCJ1dGkiOiJPRWw1dHhnRWRrU3ZQNVo3cVdNbUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.FLYKaP8tUKf2mmQcm1FoHTkcP_uY_bKTDtVEbEsI5CXaUShYzkiKgexyCrd952_gF2BisSU0GxfN2rwcmI47Sg_fOoaOnzIlHAw_opAUYVEqSqiro5V4n5XtZipWxt_ZHQ8RleoYngpf4UIeU1J5_YxeMyoLjm4fDMvuTlE3YEfQHx07sUkLZjxztGrggBjrX1fyUiKQirVxdyRvh1E2qlVmHhEvkJpUJHdxzgsGORJ8dKROfyymiQX3V3BkVq-kaFQ8PAdXowS9yTk0rl-wBJ224V5x87qWPMKAh3Nj1XdiseLn_jKPSccOxDgDmAE12zN05tUVGuR24FKxx2qBDw',
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
