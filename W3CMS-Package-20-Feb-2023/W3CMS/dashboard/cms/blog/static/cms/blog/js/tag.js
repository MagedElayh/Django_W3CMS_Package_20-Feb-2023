$('.sweet-success-cancel').on('click', function (event) {
    event.preventDefault();
    const url = $(this).attr('href');

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: "warning",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Yes, delete it !!",
        confirmButtonText: 'Delete',
        confirmButtonColor: "#DD6B55"
        
    }).then((result) => {
        if (result.value) {
            window.location.href = url;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            event.preventDefault();
        }
    })
});



jQuery(document).on('keyup', '.searchTag', function() {

    var keyValue = jQuery(this).val();
    var searchContentDiv = jQuery('.searchTag');
    console.log(keyValue)

    $.ajax({
        type: 'GET',
        url: "/dashboard/blogs/tag-search/",
        data:{"query":keyValue},
        success: function (response) {
            // $("#subscribe-form").trigger('reset');
            searchContentDiv.html(response.success)
            
           
        },
        error: function (response) {
            // alert the error if any error occured
            alert('error');
        }
    });


});	
jQuery(document).on('keyup', '#tagname', function() {


    var keyValue = jQuery(this).val();
    var result = keyValue.toLowerCase();
    console.log(result)

    document.getElementById("tagname").value = result;



});	