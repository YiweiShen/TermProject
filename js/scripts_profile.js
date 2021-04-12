// Term project - Group 8

$(document).ready(function() {

    // hide the edit part for the page
    $(".account-edit-input").hide();

    // edit and update user's avatar
    $("#edit-button-avatar").click(function(){
        $("#edit-avatar").show();
        $("#edit-button-avatar").hide();
    });

    $("#submit-button-avatar").click(function(){
        $("#edit-avatar").hide();
        $("#edit-button-avatar").show();
        // update avatar
    });

    // edit and update user's name
    $("#edit-button-name").click(function(){
        $("#edit-name").show();
        $("#edit-button-name").hide();
    });

    $("#submit-button-name").click(function(){
        $("#edit-name").hide();
        $("#edit-button-name").show();
        // update name
        $("#account-label-name").text($("#updated-name").val());
    });

    // edit and update user's nickname
    $("#edit-button-nickname").click(function(){
        $("#edit-nickname").show();
        $("#edit-button-nickname").hide();
    });

    $("#submit-button-nickname").click(function(){
        $("#edit-nickname").hide();
        $("#edit-button-nickname").show();
        // update nickname
        $("#account-label-nickname").text($("#updated-name").val());
    });

    // edit and update user's gender
    $("#edit-button-gender").click(function(){
        $("#edit-gender").show();
        $("#edit-button-gender").hide();
    });

    $("#submit-button-gender").click(function(){
        $("#edit-gender").hide();
        $("#edit-button-gender").show();
        // update gender
    });

    // edit and update user's birthday
    $("#edit-button-birthday").click(function(){
        $("#edit-birthday").show();
        $("#edit-button-birthday").hide();
    });

    $("#submit-button-birthday").click(function(){
        $("#edit-birthday").hide();
        $("#edit-button-birthday").show();
        // update birthday
    });

    // edit and update user's email
    $("#edit-button-email").click(function(){
        $("#edit-email").show();
        $("#edit-button-email").hide();
    });

    $("#submit-button-email").click(function(){
        $("#edit-email").hide();
        $("#edit-button-email").show();
        // update email
    });

    // edit and update user's mobile
    $("#edit-button-mobile").click(function(){
        $("#edit-mobile").show();
        $("#edit-button-mobile").hide();
    });

    $("#submit-button-mobile").click(function(){
        $("#edit-mobile").hide();
        $("#edit-button-mobile").show();
        // update mobile
    });

    // edit and update user's password
    $("#edit-button-password").click(function(){
        $("#edit-password").show();
        $("#edit-button-password").hide();
    });

    $("#submit-button-password").click(function(){
        $("#edit-password").hide();
        $("#edit-button-password").show();
        // update mobile
    });

    // edit and update user's twitter
    $("#edit-button-twitter").click(function(){
        $("#edit-twitter").show();
        $("#edit-button-twitter").hide();
    });

    $("#submit-button-twitter").click(function(){
        $("#edit-twitter").hide();
        $("#edit-button-twitter").show();
        // update mobile
    });

    // edit and update user's address
    $("#edit-button-address").click(function(){
        $("#edit-address").show();
        $("#edit-button-address").hide();
    });

    $("#submit-button-address").click(function(){
        $("#edit-address").hide();
        $("#edit-button-address").show();
        // update mobile
    });

    // edit and update user's privacy choice
    $("#edit-button-privacy-choice").click(function(){
        $("#edit-privacy-choice").show();
        $("#edit-button-privacy-choice").hide();
    });

    $("#submit-button-privacy-choice").click(function(){
        $("#edit-privacy-choice").hide();
        $("#edit-button-privacy-choice").show();
        // update mobile
    });
});