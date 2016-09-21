angular.module('customServices', ['ngResource'])
.factory('recursoFoto', function($resource){

	return $resource('v1/fotos/:fotoId', null,{
		update: {
			method: 'PUT'
		}

	});

})
.factory('cadastroDeFotos', function (recursoFoto, $q, $rootScope){ /* $q permite criar promises */

	var servico = {};

	servico.cadastrar = function (foto){
		return $q(function (resolve, reject){ /* resolve - then / reject - catch */
			if (foto._id) {

				recursoFoto.update(
					{fotoId: foto._id}, 
					foto, 
					function (){
						$rootScope.$broadcast('fotoCadastrada'); /* disparando evento */
						resolve({
							mensagem: "Foto " + foto.titulo + " atualizada com sucesso.",
							inclusao: false
						});
					},
					function (error){
						console.log(error);
						reject({
							mensagem: "Não foi possivel alterar a foto " + foto.titulo
						});
					}
				);

			} else {

				recursoFoto.save(
					foto,
					function(){
						$rootScope.$broadcast('fotoCadastrada'); /* disparando evento */
						resolve({
							mensagem: "Foto " + foto.titulo + " incluida com sucesso.",
							inclusao: true
						});
					},
					function(error){
						reject({
							mensagem: "Foto " + foto.titulo + " não incluida com sucesso."
						});
					}
				);

			}
		});
	};

	return servico;

});