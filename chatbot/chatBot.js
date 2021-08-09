const chatbotConfig = () =>  {
  var ldk = document.createElement("script");
  ldk.type = "text/javascript";
  ldk.async = true;
  ldk.src =
    "https://s.cliengo.com/weboptimizer/610f0e88aad93f002a56e00f/610f0e8aaad93f002a56e012.js?platform=registration";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ldk, s);
};

export default chatbotConfig;
