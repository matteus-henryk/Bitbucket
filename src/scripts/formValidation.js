const startValidation = () => {


  //* VALIDAÇÃO DOS FORMULARIOS

  if ($.fn.validate) {
    /*
      * Translated default messages for the jQuery validation plugin.
      * Locale: PT (Portuguese; português)
      * Region: BR (Brazil)
      */
    $.extend($.validator.messages, {
      // Core
      required: "Este campo é obrigatório.",
      remote: "Por favor, corrija este campo.",
      email: "Por favor, forneça um endereço de email válido.",
      url: "Por favor, forneça uma URL válida.",
      date: "Por favor, forneça uma data válida.",
      dateISO: "Por favor, forneça uma data válida (ISO).",
      number: "Por favor, forneça um número válido.",
      digits: "Por favor, forneça somente dígitos.",
      creditcard: "Por favor, forneça um cartão de crédito válido.",
      equalTo: "Por favor, forneça o mesmo valor novamente.",
      maxlength: $.validator.format(
        "Por favor, forneça não mais que {0} caracteres."
      ),
      minlength: $.validator.format(
        "Por favor, forneça ao menos {0} caracteres."
      ),
      rangelength: $.validator.format(
        "Por favor, forneça um valor entre {0} e {1} caracteres de comprimento."
      ),
      range: $.validator.format("Por favor, forneça um valor entre {0} e {1}."),
      max: $.validator.format(
        "Por favor, forneça um valor menor ou igual a {0}."
      ),
      min: $.validator.format(
        "Por favor, forneça um valor maior ou igual a {0}."
      ),
      step: $.validator.format("Por favor, forneça um valor mútiplo de {0}."),

      // Metodos Adicionais
      maxWords: $.validator.format(
        "Por favor, forneça com {0} palavras ou menos."
      ),
      minWords: $.validator.format(
        "Por favor, forneça pelo menos {0} palavras."
      ),
      rangeWords: $.validator.format(
        "Por favor, forneça entre {0} e {1} palavras."
      ),
      accept: "Por favor, forneça um tipo válido.",
      alphanumeric:
        "Por favor, forneça somente com letras, números e sublinhados.",
      bankaccountNL:
        "Por favor, forneça com um número de conta bancária válida.",
      bankorgiroaccountNL:
        "Por favor, forneça um banco válido ou número de conta.",
      bic: "Por favor, forneça um código BIC válido.",
      cifES: "Por favor, forneça um código CIF válido.",
      creditcardtypes:
        "Por favor, forneça um número de cartão de crédito válido.",
      currency: "Por favor, forneça uma moeda válida.",
      dateFA: "Por favor, forneça uma data correta.",
      dateITA: "Por favor, forneça uma data correta.",
      dateNL: "Por favor, forneça uma data correta.",
      extension: "Por favor, forneça um valor com uma extensão válida.",
      giroaccountNL: "Por favor, forneça um número de conta corrente válido.",
      iban: "Por favor, forneça um código IBAN válido.",
      integer: "Por favor, forneça um número não decimal.",
      ipv4: "Por favor, forneça um IPv4 válido.",
      ipv6: "Por favor, forneça um IPv6 válido.",
      lettersonly: "Por favor, forneça apenas com letras.",
      letterswithbasicpunc: "Por favor, forneça apenas letras ou pontuações.",
      mobileNL: "Por favor, forneceça um número válido de telefone.",
      mobileUK: "Por favor, forneceça um número válido de telefone.",
      nieES: "Por favor, forneça um NIE válido.",
      nifES: "Por favor, forneça um NIF válido.",
      nowhitespace: "Por favor, não utilize espaços em branco.",
      pattern: "O formato fornenecido é inválido.",
      phoneNL: "Por favor, forneceça um número de telefone válido.",
      phoneUK: "Por favor, forneceça um número de telefone válido.",
      phoneUS: "Por favor, forneceça um número de telefone válido.",
      phonesUK: "Por favor, forneceça um número de telefone válido.",
      postalCodeCA: "Por favor, forneceça um número de código postal válido.",
      postalcodeIT: "Por favor, forneceça um número de código postal válido.",
      postalcodeNL: "Por favor, forneceça um número de código postal válido.",
      postcodeUK: "Por favor, forneceça um número de código postal válido.",
      postalcodeBR: "Por favor, forneça um CEP válido.",
      require_from_group: $.validator.format(
        "Por favor, forneça pelo menos {0} destes campos."
      ),
      skip_or_fill_minimum: $.validator.format(
        "Por favor, optar entre ignorar esses campos ou preencher pelo menos {0} deles."
      ),
      stateUS: "Por favor, forneça um estado válido.",
      strippedminlength: $.validator.format(
        "Por favor, forneça pelo menos {0} caracteres."
      ),
      time:
        "Por favor, forneça um horário válido, no intervado de 00:00 e 23:59.",
      time12h:
        "Por favor, forneça um horário válido, no intervado de 01:00 e 12:59 am/pm.",
      url2: "Por favor, forneceça uma URL válida.",
      vinUS: "O número de identificação de veículo informada (VIN) é inválido.",
      zipcodeUS: "Por favor, forneceça um código postal americano válido.",
      ziprange: "O código postal deve estar entre 902xx-xxxx e 905xx-xxxx",
      cpfBR: "Por favor, forneça um CPF válido.",
    });

    $.validator.setDefaults({
      highlight: function (element, errorClass, validClass) {
        $(element)
          .closest("div")
          .removeClass(validClass)
          .addClass("is-invalid-label");
        $(element).addClass("is-invalid-input");
      },
      unhighlight: function (element, errorClass, validClass) {
        let obj = $(element).closest("div");

        $(element).removeClass("is-invalid-input");

        obj.removeClass(errorClass);
        obj.removeClass("is-invalid-label");

        if (validClass) {
          obj.removeClass(validClass);
        }
      },
      errorElement: "span",
      errorClass: "form-error",
      validClass: "valid",
    });

    window.initValidacao = function (parent) {
      // Se não definiu um elemento usa o body
      let $parent = parent ? parent : $("body");

      // Plugin adicionado por loop, para que 1 instancia não use a configuração do outro
      $parent.find("form[data-validate]").each(function () {
        // Aplica a validação
        $(this).validate();
      });
    };
    // Inicia as validações
    initValidacao();
  }
};

export default startValidation;