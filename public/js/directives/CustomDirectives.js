angular.module('customDirectives', [])
.directive('photoPanel', function (){
	/* <photo-panel></photo-panel> --> camelcase to - */
	
	/* directive definition object */
	var ddo = {};

	/* A- ATRIBUTE; E - ELEMENT */
	ddo.restric = "AE"; 

	ddo.scope = {
		titulo: '@', /* com o mesmo nome pode ser trocado por @ */
		url: '@'
	};

	ddo.transclude = 'true'; /* faz a diretiva manter os itens filhos */

	/*ddo.template = 
              ' <div class="panel panel-default"> '
            + '    <div class="panel-heading"> '
            + '        <h3 class="panel-title">{{titulo}}</h3> '
            + '    </div> '
            + '    <div class="panel-body" ng-transclude> '
            + '    </div> '
            + ' </div> '
	*/

	ddo.templateUrl = 'js/directives/photoPanel.html';

	return ddo;

})
.directive('minhaFoto', function() {

    var ddo = {};

    ddo.restrict = "AE";

    ddo.scope = {
        titulo: '@',
        url: '@'
    };

    ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           

    return ddo;

})
.directive('meuBotaoPerigo', function() {

    var ddo = {};

    ddo.restrict = "E";

    ddo.scope = {
        nome: '@', /* pass as string */
        acao: '&' /* pass as expression */
    };

    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';           

    return ddo;

})
.directive('meuFocus', function(){

    var ddo = {};

    ddo.restrict = "A";

    //ddo.scope = {
    //    focado: '=' /* qualquer modificação atualizada na propriedade o controle fica sabendo  */
    //};

    ddo.link = function (scope, element){ /* toda vez que a propriedade for mudada a função sera ativada */
        /*scope.$watch('focado', function (){
            if (scope.focado) {
                element[0].focus();
                scope.focado = false;
            }
        });*/

        scope.$on('fotoCadastrada', function(){
            element[0].focus();
            scope.focado = false;
        });
    }

    return ddo;
});