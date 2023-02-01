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
					  accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZTA3OTNkMzktMDkzOS00OTZkLWIxMjktMTk4ZWRkOTE2ZmViLyIsImlhdCI6MTY3NTI2OTUyNCwibmJmIjoxNjc1MjY5NTI0LCJleHAiOjE2NzUyNzUxMzgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFQSXM1VEwrU3Z1TFhZcktCSkNjN3VtU2FZTUx4ejZBd3JMMkJxVzJ2WExDRmJqY04vdHZtSnUxQVdlMXJqcWFPVFFSTlVZd0VJNzIzY2VIL2piMzJ3azFMTlZDVndNVEFXbWwyWk5MRXV6WT0iLCJhbXIiOlsicnNhIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiY29udHJvbHMiOlsiYXBwX3JlcyJdLCJjb250cm9sc19hdWRzIjpbIjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCJdLCJkZXZpY2VpZCI6ImRhZDM1NmMyLTk4ZmEtNDAyMC04NGVhLTkxM2JhZTI1NDRlMSIsImZhbWlseV9uYW1lIjoiQmFqcGFpIiwiZ2l2ZW5fbmFtZSI6IlZhaXNoYW5naSIsImlwYWRkciI6IjEyMi4xNjEuNzcuMjQ3IiwibmFtZSI6IkJhanBhaSwgVmFpc2hhbmdpIiwib2lkIjoiNGJiMWI1NjQtY2I0Ny00ODQ3LTg3YmYtNTAxNTQ2NDdiMWIzIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTMyOTA2ODE1Mi0xNDU0NDcxMTY1LTE0MTcwMDEzMzMtMTE2NjUyMDIiLCJwdWlkIjoiMTAwMzIwMDFDQTVCRTY5OSIsInJoIjoiMC5BWHNBT1QxNTREa0piVW14S1JtTzNaRnY2d2tBQUFBQUFBQUF3QUFBQUFBQUFBQjdBTjAuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImR2Y19tbmdkIiwiZHZjX2NtcCIsImR2Y19kbWpkIiwia21zaSJdLCJzdWIiOiJxaU1QenBJTVBZdXFKeHB4c0FBaHFrR2stX0tRX0E1MW92aVgwcEhrYnhrIiwidGlkIjoiZTA3OTNkMzktMDkzOS00OTZkLWIxMjktMTk4ZWRkOTE2ZmViIiwidW5pcXVlX25hbWUiOiJ2YWlzaGFuZ2kuYmFqcGFpQGFjY2VudHVyZS5jb20iLCJ1cG4iOiJ2YWlzaGFuZ2kuYmFqcGFpQGFjY2VudHVyZS5jb20iLCJ1dGkiOiIydXFheTgweEprS3E1c1ZDcTA0bEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.nOJbJtpwipvD7sOgD-8dMKu-u_DWbADP8qgxMM67VZx4bWtx1DIbLVv-Bb_IVL-pA3TFp3wHOJkPf3DlMq_UuB4eMfpmEtZy-6xBx78uwZxIZi4L3AIIup-sUpTKM1VLYgbAJW-OouZPx9kyi2S1vWV9WziJir3cskDJ07JaXRGWawUJxlhPPEKMIxbsku6a7zy5C6sIwLSxJHSIJUju-yDqnUneXUYApJ85ClrDb9WOXkvk_KMIK9yrSMajqWInIQdQkrXhUIGXs8a_f0-Y5jJzodW20eWYUq2v-SBTmYKBDhjtuqHVGcuZJjx-adinOO34TIFp3wTMy0LPQEWdGg',
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
