$().ready(function() {

$("#msform").validate({

  rules: {
      Emri_Ndërmarrësit: {
        required: true,
        minlength: 2
      },
      Numri_Regjistrimit: "required",
      Numri_fiskal: {
        required: true,
        minlength: 12,
        maxlength: 12,
      },
      Adresa: "required",
      Numri_Telefonit: "required",
      email: {
        required: true,
        email: true
      },
      Emri_zyrtarit: "required",
      Adresa: {
        required: true,
      },
      Numri_Telefonit: {
        required: true
      },
      Email: "required",
      Numri_ID: {
        required: true,
        minlength: 10,
        maxlength: 10
      },

  }

})
}
)
