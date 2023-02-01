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
					  accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTA3OTNkMzktMDkzOS00OTZkLWIxMjktMTk4ZWRkOTE2ZmViLyIsImlhdCI6MTY3NTI2NDgyOSwibmJmIjoxNjc1MjY0ODI5LCJleHAiOjE2NzUyNzAwNjUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFCQmtjSVhkYnVxSTlwbGxZQ0xwWC94b3A4TjZhTklGK25qWlRWK25HV2E5ZWc1ZS9TVytwWWgxbXgzcE4zV2hxVUNKUlk1TCtadS9oRFVQU2M4d05VeXdFZGxhaTlwQzlhZjRIblIrY2YwTT0iLCJhbXIiOlsicnNhIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiY29udHJvbHMiOlsiYXBwX3JlcyJdLCJjb250cm9sc19hdWRzIjpbIjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCJdLCJkZXZpY2VpZCI6ImRhZDM1NmMyLTk4ZmEtNDAyMC04NGVhLTkxM2JhZTI1NDRlMSIsImZhbWlseV9uYW1lIjoiQmFqcGFpIiwiZ2l2ZW5fbmFtZSI6IlZhaXNoYW5naSIsImlwYWRkciI6IjEyMi4xNjEuNzcuMjQ3IiwibmFtZSI6IkJhanBhaSwgVmFpc2hhbmdpIiwib2lkIjoiNGJiMWI1NjQtY2I0Ny00ODQ3LTg3YmYtNTAxNTQ2NDdiMWIzIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTMyOTA2ODE1Mi0xNDU0NDcxMTY1LTE0MTcwMDEzMzMtMTE2NjUyMDIiLCJwdWlkIjoiMTAwMzIwMDFDQTVCRTY5OSIsInJoIjoiMC5BWHNBT1QxNTREa0piVW14S1JtTzNaRnY2d2tBQUFBQUFBQUF3QUFBQUFBQUFBQjdBTjAuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImR2Y19tbmdkIiwiZHZjX2NtcCIsImR2Y19kbWpkIiwia21zaSJdLCJzdWIiOiJxaU1QenBJTVBZdXFKeHB4c0FBaHFrR2stX0tRX0E1MW92aVgwcEhrYnhrIiwidGlkIjoiZTA3OTNkMzktMDkzOS00OTZkLWIxMjktMTk4ZWRkOTE2ZmViIiwidW5pcXVlX25hbWUiOiJ2YWlzaGFuZ2kuYmFqcGFpQGFjY2VudHVyZS5jb20iLCJ1cG4iOiJ2YWlzaGFuZ2kuYmFqcGFpQGFjY2VudHVyZS5jb20iLCJ1dGkiOiJ1cThsck5VWkxFQ3U1eHBWU2tOWUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.Ya4Y0uBqs6gkr1vY6QJaMCjpMnLJ1f6Wn9iMpdc4Hj8YWS_o-QMNmYeRLDrvlQ-TDTkbu0mVfeGutPI52TnQYa3KYbCOc75sdrgxZClJwk02R2efKkmQ6_TLOdeCnH93NMLfB0QW9LfQ8ezIR-iOouNqfJII_F2gUY4u9cvhggUq14N58vixNR7E-oHCXcE5VNs26NkDZU-0UWNcQyUM5O_sDAxLlUzq3rq0qOeHrL9j-J73fOUrLOm7xL9zWLCILRBtgw0r0gm4eMHaI9LF4vbft_m_s1yjBwGRmYyldfW-YM_B-TgDjoc0Lm0neAmFR6OY_06UqDE4AZMqdKriig',
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
