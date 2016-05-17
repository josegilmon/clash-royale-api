(function () {

  angular
  .module('clash-royale-api')
  .controller('ArenasController', ArenasController);

  ArenasController.$inject = ['ArenasService'];

  function ArenasController(ArenasService) {
    var vm = this;
    vm.title = 'Arenas';
    vm.previewTitle = 'Preview Arena';
    vm.model = {};
    vm.fields = [
      {
        key: 'number',
        type: 'input',
        templateOptions: {
          label: 'Arena Number',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Arena Name',
          required: true,
          placeholder: 'Arena Name'
        }
      },
      {
        key: 'victoryGold',
        type: 'input',
        templateOptions: {
          label: 'Victory Gold',
          required: true,
          placeholder: 'Victory Gold'
        }
      },
      {
        key: 'minTrophies',
        type: 'input',
        templateOptions: {
          label: 'Minimum Trophies',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'clan.request.common',
        type: 'input',
        templateOptions: {
          label: 'Request Common Cards',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'clan.request.rare',
        type: 'input',
        templateOptions: {
          label: 'Request Rare Cards',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'clan.donate.common',
        type: 'input',
        templateOptions: {
          label: 'Donate Common Cards',
          required: true,
          placeholder: 0
        }
      },
      {
        key: 'clan.donate.rare',
        type: 'input',
        templateOptions: {
          label: 'Donate Rare Cards',
          required: true,
          placeholder: 0
        }
      },
    ];

    vm.submit = function(model) {
      ArenasService.create(model);
    }
  }

})();