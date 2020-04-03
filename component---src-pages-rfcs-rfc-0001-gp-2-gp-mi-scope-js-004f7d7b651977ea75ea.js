(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"4SQN":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("V+eJ"),a("ioFf"),a("91GP"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("q1tI")),l=r(a("TSYQ"));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],0<=t.indexOf(a)||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],!(0<=t.indexOf(a))&&Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=function(e){var t=e.children,a=e.visuallyHiddenText,r=e.className,s=o(e,["children","visuallyHiddenText","className"]);return n.default.createElement("div",i({className:(0,l.default)("nhsuk-inset-text",r)},s),n.default.createElement("span",{className:"nhsuk-u-visually-hidden"},a," "),t)};s.defaultProps={visuallyHiddenText:"Information:",className:""};var u=s;t.default=u},"87zB":function(e,t,a){"use strict";a("HAE/");var n,l=(n=a("4SQN"))&&n.__esModule?n:{default:n};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l.default;t.default=r},RH7Y:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("oB8Y"),o=a("87zB"),s=a.n(o),u=a("y+6e"),c=a.n(u),d=a("MVY5"),p=a.n(d);a("pxef");t.default=function(e){e.children;return l.a.createElement(i.a,{sidemenu:{items:[{url:Object(r.b)("/rfcs/RFC0001_gp2gp_mi/overview"),label:"Overview"},{url:Object(r.b)("/rfcs/RFC0001_gp2gp_mi/vision"),label:"Vision"},{url:"#top",label:"Scope",selected:!0},{url:Object(r.b)("/rfcs/RFC0001_gp2gp_mi/usecases"),label:"Usecases"},{url:Object(r.b)("/rfcs/RFC0001_gp2gp_mi/data"),label:"New data to be collected"},{url:Object(r.b)("/rfcs/RFC0001_gp2gp_mi/event_registration_started"),label:"Event: Registration Started"},{url:Object(r.b)("/rfcs/RFC0001_gp2gp_mi/event_ehr_generated"),label:"Event: EHR Generated"},{url:Object(r.b)("/rfcs/RFC0001_gp2gp_mi/event_ehr_validated"),label:"Event: EHR Validated"},{url:Object(r.b)("/rfcs/RFC0001_gp2gp_mi/event_ehr_integrated"),label:"Event: EHR Integrated"}]},breadcrumb:{items:[{url:Object(r.b)("/rfcs"),label:"RFCs"},{url:Object(r.b)("/rfcs/RFC0001_gp2gp_mi/overview"),label:"RFC0001 GP2GP MI"}]}},l.a.createElement(s.a,null,l.a.createElement("p",null,"This RFC is currently 'Being discussed'. As such, it may be undergoing significant change and should not be used as the basis of an implementation at the moment. If you want to have your say and contribute to this RFC then go to our"," ",l.a.createElement("a",{href:"https://github.com/nhsconnect/prm-external-developer-website/issues/1",title:"External website where RFC comments are allowed"},"Github site"),".")),l.a.createElement("h1",null,"RFC0001 GP2GP MI"),l.a.createElement("h2",null,"Scope"),l.a.createElement("p",null,"We believe that initially, we should focus on the areas where we want to gather new information first, to prove out the solution, as such we will be focusing on the events around when the EHR is sent and when the EHR is received."),l.a.createElement(c.a,{src:Object(r.b)("/RFC0001_gp2gp_mi/scope_example.png"),alt:"Highlighting the area of focus for this RFC around the EHR being sent and received",caption:"Our area of focus around the EHR being sent and received",className:"image-fullwidth"}),l.a.createElement("h3",null,"Event delivery method"),l.a.createElement("p",null,"We intend to provide a public internet facing HTTPS end point and make it available via the evolving NHS 'developer' website:"," ",l.a.createElement(r.a,{to:"https://digital.nhs.uk/developer"},"https://digital.nhs.uk/developer"),"."),l.a.createElement("p",null,"All data should be captured as close to the time of the real life event as possible."),l.a.createElement("p",null,"We are equally happy to explore other methods with suppliers if appropriate."),l.a.createElement("h3",null,"Authorisation and Authentication"),l.a.createElement("p",null,"We intend to provide authorisation and authentication via existing methods"," ",l.a.createElement(r.a,{to:"https://digital.nhs.uk/developer/security-and-authorisation"},"https://digital.nhs.uk/developer/security-and-authorisation"),". We are equally happy to explore other methods with suppliers if appropriate."),l.a.createElement("h3",null,"Use cases"),l.a.createElement("p",null,"We intend to provide use cases that outline the events and data we expect to see for specific flows in the registration process."),l.a.createElement("h3",null,"Assurance"),l.a.createElement("p",null,"Assurance will intially take the form of collaboratively developing with suppliers against the use cases provided. We are then looking to explore how we might best continue assurance through to production and then ongoing."),l.a.createElement("h3",null,"Correlation to old MI data set"),l.a.createElement("p",null,"Whilst we intend to decomission the existing MI data as soon as possible, we know that for a period of time we need to dual run and be able to correlate data."),l.a.createElement(p.a,null,l.a.createElement(p.a.Previous,{href:Object(r.b)("rfcs/RFC0001_gp2gp_mi/vision")},"Vision"),l.a.createElement(p.a.Next,{href:Object(r.b)("/rfcs/RFC0001_gp2gp_mi/usecases")},"Usecases")))}},b1OJ:function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("V+eJ"),a("ioFf"),a("91GP"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("q1tI")),l=r(a("TSYQ"));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t,a=1;a<arguments.length;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],0<=t.indexOf(a)||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],!(0<=t.indexOf(a))&&Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=function(e){var t=e.caption,a=e.alt,r=e.className,s=o(e,["caption","alt","className"]);return n.default.createElement("figure",{className:(0,l.default)("nhsuk-image",r)},n.default.createElement("img",i({className:"nhsuk-image__img",alt:a},s)),t?n.default.createElement("figcaption",{className:"nhsuk-image__caption"},t):null)};s.defaultProps={caption:"",alt:"",className:""};var u=s;t.default=u},"y+6e":function(e,t,a){"use strict";a("HAE/");var n,l=(n=a("b1OJ"))&&n.__esModule?n:{default:n};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l.default;t.default=r}}]);
//# sourceMappingURL=component---src-pages-rfcs-rfc-0001-gp-2-gp-mi-scope-js-004f7d7b651977ea75ea.js.map