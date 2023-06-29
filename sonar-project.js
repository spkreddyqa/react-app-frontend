const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://13.235.245.107:9000',
       options : {
       'sonar.sources': '.',
       'sonar.inclusions' : 'src/**' // Entry point of your code
       }
     }, () => {});
