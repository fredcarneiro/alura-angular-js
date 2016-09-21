angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){
	
	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoFoto.query(
		function (fotos){
			$scope.fotos = fotos;
		},
		function (error){
			console.log(error);
		}
	);

	/*$http.get('v1/fotos')
	.success(function (fotos){
		$scope.fotos = fotos;
	})
	.error(function (error){
		console.log(error);
	});*/

	/*var promise = $http.get('v1/fotos');

	promise.then(function (retorno){
		$scope.fotos = retorno.data;
	}).catch(function (error){
		console.log(error);
	});*/

	$scope.remover = function (foto){
		

		recursoFoto.delete(
			{
				fotoId: foto._id
			},
			function(){ /* success */
				var indexFoto = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indexFoto, 1);

				$scope.mensagem = "Foto " + foto.titulo + " deletada com sucesso";
			},
			function(error){ /* error */
				$scope.mensagem = error;
			}
		);


		/*$http.delete('v1/fotos/' + foto._id)
		.success(function(){
			
			var indexFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indexFoto, 1);

			$scope.mensagem = "Foto " + foto.titulo + " deletada com sucesso";

		})
		.error(function (error){
			$scope.mensagem = error;
		});*/		
	};



});