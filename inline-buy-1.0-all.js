(function() {
var ROUTING_CONFIG = {
  "bootstrapSelector": "body",
  "routes": [
    {
      "configurationUrl": "https://dz57b37czzuk6.cloudfront.net/storefronts/spirit-airlines/topup/PSBGT-2037-spirit-topup/configuration.json",
      "sfnJsUrl": "https://d3e6canjev74qs.cloudfront.net/js/v4/sfn.js",
      "weight": 100
    }
  ]
}
;

/* eslint-disable no-var, vars-on-top, prefer-arrow-callback, prefer-template, func-names, prefer-destructuring,
object-shorthand */
// WARNING: do not use ES6 syntax in this file. eslint can still be used to fix syntax errors in valid ES5 hence above
// exports are for testing only, and will be stripped when this file is substituted into index.template

var CONFIGURATION_URL_COOKIE = 'X-SFN-CONFIGURATION-URL';
var JS_URL_COOKIE = 'X-SFN-JS-URL';

function generateWeightedIndex(weights) {
  var sum = 0;
  var random = Math.random() * 100;
  for (var i = weights.length - 1; i >= 0; i -= 1) {
    if (random >= sum && random < weights[i] + sum) {
      return i;
    }
    sum += weights[i];
  }
  return 0;
}

function randomlySelectRoute(routes) {
  var weights = routes.map(function (o) {
    return o.weight;
  });
  return routes[generateWeightedIndex(weights)];
}

function getCookieValue(identifier) {
  // eslint-disable-next-line no-undef
  var cookie = document.cookie.match('(^|[^;]+)\\s*' + identifier + '\\s*=\\s*([^;]+)');
  return cookie ? cookie.pop() : '';
}

function setCookieWithOptions(name, value, options) {
  var oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

  var cookie = name + '=' + value + '; expires=' + oneYearFromNow.toGMTString() + ';';

  for (var key in options) {
    cookie += key === 'secure' ? 'Secure;' : key + '=' + options[key] + ';';
  }

  // eslint-disable-next-line no-undef
  document.cookie = cookie;
}

function setCookie(name, value) {
  setCookieWithOptions(name, value, { path: '/', samesite: 'none', secure: true });
  if (getCookieValue(name) === value) {
    return;
  }
  setCookieWithOptions(name, value, { path: '/' });
  if (getCookieValue(name) !== value) {
    console.error('Cannot set cookie', name, ': ', value);
  }
}

// eslint-disable-next-line no-unused-vars
function getConfiguration(routingConfig) {
  var sfnJsUrl = getCookieValue(JS_URL_COOKIE);
  var configurationUrl = getCookieValue(CONFIGURATION_URL_COOKIE);
  var bootstrapSelector = routingConfig.bootstrapSelector;
  var routes = routingConfig.routes;

  if (sfnJsUrl && configurationUrl) {
    for (var i = 0; i < routes.length; i += 1) {
      if (routes[i].configurationUrl === configurationUrl && routes[i].sfnJsUrl === sfnJsUrl) {
        return {
          bootstrapSelector: bootstrapSelector,
          configurationUrl: configurationUrl,
          sfnJsUrl: sfnJsUrl,
        };
      }
    }
  }

  var route = randomlySelectRoute(routes);
  setCookie(CONFIGURATION_URL_COOKIE, route.configurationUrl);
  setCookie(JS_URL_COOKIE, route.sfnJsUrl);
  return {
    bootstrapSelector: bootstrapSelector,
    configurationUrl: route.configurationUrl,
    sfnJsUrl: route.sfnJsUrl,
  };
}





/* eslint-disable no-var, vars-on-top, prefer-arrow-callback, prefer-template, func-names, no-undef,
prefer-destructuring,  */

// eslint-disable-next-line no-undef
var configuration = getConfiguration(ROUTING_CONFIG);

function getOrCreateBootstrapEl(bootstrapSelector) {
  var bootstrapEl = document.querySelector('pts-bootstrap');
  if (bootstrapEl) {
    if (bootstrapSelector) {
      console.warn('PTS: <pts-bootstrap> already exists, so ignoring bootstrapSelector: ' + bootstrapSelector);
    }
    return bootstrapEl;
  }

  if (!bootstrapSelector) {
    throw new Error('PTS: <pts-bootstrap> element not found');
  }
  var container = document.querySelector(bootstrapSelector);
  if (!container) {
    throw new Error('PTS: bootstrapSelector does not match any elements: ' + bootstrapSelector);
  }
  bootstrapEl = document.createElement('pts-bootstrap');
  container.appendChild(bootstrapEl);
  return bootstrapEl;
}

function injectConfigurationUrl() {
  var bootstrapEl = getOrCreateBootstrapEl(configuration.bootstrapSelector);
  bootstrapEl.setAttribute('configuration-url', configuration.configurationUrl);
}

function injectScript() {
  var script = document.createElement('script');
  script.async = true;
  script.src = configuration.sfnJsUrl;
  script.type = 'text/javascript';
  // crossorigin must be set with setAttribute()
  script.setAttribute('crossorigin', '');
  document.head.appendChild(script);
}

injectConfigurationUrl();
injectScript();

})();
