$(document).on('turbolinks:load', function () {
  activateSelect2();
  activateChosen();

  $('#friend_ethnicity').change(function() {
    if ($(this).find('option:selected').text() == "Other") {
      $('.other_ethnicity_wrapper').show();
    } else {
      if ($('.other_ethnicity_wrapper').is(":visible")) {
        $('#friend_other_ethnicity').val('');
        $('.other_ethnicity_wrapper').hide();
      }
    }
  });

  $('#detention_case_status').change(function() {
    if ($(this).find('option:selected').text() == "Other") {
      $('.other_case_status_wrapper').show();
    } else {
      if ($('.other_case_status_wrapper').is(":visible")) {
        $('#detention_other_case_status').val('');
        $('.other_case_status_wrapper').hide();
      }
    }
  });

  $('#friend_no_a_number').change(function() {
    if ($(this).prop('checked')) {
      $('#friend_a_number').val('');
    }
  });

  $('#add_family_relationship_modal').on('shown.bs.modal', function(){
    $('#new_family_relationship')[0].reset();
  });

  $('.open_activity_modal').click(function() {
    $('#activity_modal').modal('show');
  });

  $('.open_detention_modal').click(function() {
    $('#detention_modal').modal('show');
  });

  $('.open_ankle_monitor_modal').click(function() {
    $('#ankle_monitor_modal').modal('show');
  });

  $('.open_friend_note_modal').click(function() {
    $('#friend_note_modal').modal('show');
  });
});

function activateSelect2() {
  var allSelect2Elements = $('.js-select2');
  for (var i=0; i<allSelect2Elements.length;i++) {
    var select2Element = allSelect2Elements[i];
    var attributes = {};
    if (select2Element.id == 'filterrific_activity_type') {
      attributes['width'] = '33%';
    } else if (
      select2Element.id == 'filterrific_activity_location' ||
      select2Element.id == 'filterrific_activity_judge'
    ) {
      attributes['width'] = '45%';
    } else if (select2Element.id == 'filterrific_country_of_origin') {
      attributes['width'] = '66%';
    } else {
      attributes['width'] = '100%';
    }

    if (!select2Element.id.includes('filterrific')) {
      attributes['theme'] = 'bootstrap';
    }

    $(select2Element).select2(attributes);

    // remove duplicated select2-containers
    // this happens when you start on a page with a select2 element,
    // then navigate to a second page AND use the browser back button
    // to return to the original page
    if ($(select2Element).next().next().hasClass('select2-container')) {
      $(select2Element).next().next().remove();
    }
  }
}

function activateChosen() {
  var all_chosen_selects = $('.js-chosen');
  for (var i=0; i<all_chosen_selects.length;i++) {
    var chosen_select = all_chosen_selects[i];
    var attributes = {
      allow_single_deselect: true,
      no_results_text: 'No results matched',
      width: '100%'
    };
    $(chosen_select).chosen(attributes);
    if ($(chosen_select).next().next().hasClass('chosen-container')) {
      $(chosen_select).next().next().remove();
    }
  }
}
