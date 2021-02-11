Perch.UserConfig.redactor = (function () {
  const get = function (profile, config, field) {
    config.plugins = ['fontcolor', 'alignment'];
    config.buttons = ['link', 'bold', 'italic', 'format', 'ol', 'ul', 'html'];
    config.formatting = ['p', 'h3', 'h4'];
    config.fontcolors = ['#fdfcfa', '#5bb072', '#535cb0', '#b09b53', '#b07677'];
    config.formattingAdd = {
      'gold-subheading-add': {
        title: 'Gold Subheading',
        api: 'module.block.format',
        args: {
          tag: 'h3',
          class: 'h3-gold-subheading',
        },
      },
      'gold-subheading-remove': {
        title: 'Remove Gold Subheading',
        api: 'module.block.format',
        args: {
          tag: 'h3',
          class: 'h3-gold-subheading',
          type: 'remove',
        },
      },
    };

    return config;
  };

  const load = function (cb) {
    jQuery.getScript(`${Perch.path}/addons/plugins/editors/redactor-plugins/alignment.js`);
    jQuery.getScript(`${Perch.path}/addons/plugins/editors/redactor-plugins/fontcolor.js`, cb);
  };

  return {
    get,
    load,
  };
})();
