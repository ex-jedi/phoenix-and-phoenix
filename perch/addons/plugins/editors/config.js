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
      'split-text-heading-add': {
        title: 'Split Text Heading',
        api: 'module.block.format',
        args: {
          class: 'split-text-heading-animation',
        },
      },
      'split-text-heading-remove': {
        title: 'Remove Split Text Heading',
        api: 'module.block.format',
        args: {
          class: 'split-text-heading-animation',
          type: 'remove',
        },
      },
      'split-text-body-add': {
        title: 'Split Text Body',
        api: 'module.block.format',
        args: {
          class: 'split-text-body-animation',
        },
      },
      'split-text-body-remove': {
        title: 'Remove Split Text body',
        api: 'module.block.format',
        args: {
          class: 'split-text-body-animation',
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
