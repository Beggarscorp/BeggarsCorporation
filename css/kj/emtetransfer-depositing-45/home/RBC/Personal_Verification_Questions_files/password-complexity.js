function PasswordComplexityChecker(ie, we, ie2, ms) {
  'use strict';

  // input element to which handle keystokes from
  this.ie = ie;

  // wrapper element for complexity indicator
  this.we = we;

  // second input element, which will be compared to the first one
  // to make an announcement like "passwords match" or "passwords do not match"

  this.ie2 = ie2;

  // elements which holds messages like "passwords match", "passwords do not match"

  this.ms = ms;

  // description element

  this.de = $(we).find('.password-complexity-description');

  this.complexity = 'weak';

  // set listeners for input changes

  this.check = function(password) {
    // hide all prior to displaying appropriate message
    $(this.de).children().hide();

    if(password.length < 8) {
      $(this.de).find('.msg-too-short').show();
      this.appear_weak();
      return;
    }

    var special_chars_count = this.count_special_chars(password);
    var number_count = this.count_numbers(password);
    var pseudo_complexity = special_chars_count + number_count;

    if(this.has_any_letter(password)) {
      if(pseudo_complexity === 0) {
        this.complexity = 'weak';
        this.appear_weak();
      } else if(pseudo_complexity === 1) {
        this.complexity = 'fair';
        this.appear_fair();
      } else {
        this.complexity = 'strong';
        this.appear_strong();
      }
    } else {
      this.complexity = 'weak';
      this.appear_weak();
    }

    $(this.de).find('.msg-' + this.complexity).show();
  }

  this.clean_array = function(arr) {
    if(!arr) return [];
    var out = [];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i]) { out.push(arr[i]) }
    }
    return out;
  }

  this.regex_count = function(str, pattern) {
    var matched = this.flatten_occurrences(this.clean_array(str.match(pattern)));
    if(!matched) return 0;
    if(matched.length === 1) {
      if(matched[0] === '') return 0;
    }
    return matched.length;
  }

  this.flatten_occurrences = function(arr) {
    var out = [];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i].length > 1) {
        Array.prototype.push.apply(out, arr[i].split(''));
      } else {
        out.push(arr);
      }
    }
    return out;
  }

  this.count_special_chars = function(str) {
    return this.regex_count(str, /[-!$%^&*@#()_+|~=`{}\[\]:";'<>?,.\/]*/g)
  }

  this.count_numbers = function(str) {
    return this.regex_count(str, /\d/g);
  }

  this.length_check = function(str) {
    return str.length >= 8;
  }

  this.has_upper_letter = function(str) {
    return /[A-Z ÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]/.test(str);
  }

  this.has_lower_letter = function(str) {
    return /[a-z àâäèéêëîïôœùûüÿç]/.test(str);
  }

  this.has_any_letter = function(str) {
    return this.has_lower_letter(str) || this.has_upper_letter(str);
  }

  this.has_number = function(str) {
    return /\d/i.test(str);
  }

  this.has_special_char = function(str) {
    return !/^[a-zA-Z0-9- àâäèéêëîïôœùûüÿçÀÂÄÈÉÊËÎÏÔŒÙÛÜŸÇ]*$/.test(str);
  }

  // UI

  this.shown = false

  this.show = function() {
    $(this.we).css('display', 'block')
    .animate({
      height: '20px'
    }, 100, function() {
      this.shown = true
    }.bind(this));
  }

  this.hide = function() {
    $(this.we).animate({
      height: 0
    }, 100, function() {
      $(we).css('display', 'none')
      this.shown = false
    }.bind(this));
  }

  this.appear_weak = function() {
    $(this.we)
    .find('.password-complexity-bar')
    // flush all classes
    .attr('class', 'password-complexity-bar')
    .first()
    .addClass('weak');
  }

  this.appear_fair = function() {
    $(this.we)
    .find('.password-complexity-bar')
    .attr('class', 'password-complexity-bar')
    .each(function(i) {
      // style first two
      if(i >= 2) return;
      $(this).addClass('fair');
    })
  }

  this.appear_strong = function() {
    $(this.we)
    .find('.password-complexity-bar')
    .attr('class', 'password-complexity-bar strong');
  }

  this.check_both_fields_match = function() {
    if(!$(this.ie2) || !$(this.ms)) return;
    if(!$(this.ie).val().length && !$(this.ie2).val().length) {
      $(this.ms).find('div').css('display', 'none');
      return;
    }
    if($(this.ie).val() === $(this.ie2).val()) {
      $(this.ms).find('.matched').css('display', 'block');
      $(this.ms).find('.not-matched').css('display', 'none');
    } else {
      $(this.ms).find('.matched').css('display', 'none');
      $(this.ms).find('.not-matched').css('display', 'block');
    }
  }

  // events

  $(this.ie).on('blur', function() {
    // hide on blur if value is empty
    if(!$(ie).val().length) this.hide();
  }.bind(this))

  $(this.ie).on('keyup', function() {
    this.check_both_fields_match();
    if($(ie).val().length) {

      if(!this.shown) this.show();
      this.check($(ie).val());
    } else {
      this.hide();
    }
  }.bind(this))

  /*
  $(this.ie).on('focus', function() {
    if(!$(ie).val().length) this.show();
  }.bind(this))
  */

  if(this.ie2 && this.ms) {
    $(this.ie2).on('keyup change', function() {
      this.check_both_fields_match();
    }.bind(this))
  }

}
