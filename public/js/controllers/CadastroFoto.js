angular.module('alurapic').controller('CadastroFotoController', function ($scope, $routeParams, recursoFoto, cadastroDeFotos){

	$scope.foto = {};
	$scope.mensagem = '';

	if ($routeParams.fotoId) 
	{
		
		recursoFoto.get(
			{
				fotoId: $routeParams.fotoId
			},
			function(foto){
				$scope.foto = foto;
			},
			function(error){
				$scope.mensagem = 'Foto de ID ' + $routeParams.fotoId + ' não encontrada.';
			}
		);

		/*$http.get('v1/fotos/' + $routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto;
			console.log(foto);
		})
		.error(function(erro){
			$scope.mensagem = 'Foto de ID ' + $routeParams.fotoId + ' não encontrada.';
			console.log(erro);
		});*/		
	}

	$scope.submitForm_old = function(){
		
		if ($scope.formulario.$valid) 
		{
			
			if ($scope.foto._id) 
			{
				
				recursoFoto.update(
					{
						fotoId: $scope.foto._id
					},
					$scope.foto,
					function(){
						$scope.mensagem = 'Foto alterada com sucesso';
					},
					function(error){
						$scope.mensagem = 'Foto nao alterada com sucesso';
						console.log(erro);
					}
				);

				/*$http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
				.success(function(){
					$scope.mensagem = 'Foto alterada com sucesso';
				})
				.error(function(erro){
					$scope.mensagem = 'Foto nao alterada com sucesso';
					console.log(erro);
				});*/
			}
			else
			{
				
				recursoFoto.save(
					$scope.foto,
					function(){
						$scope.foto = {};
						$scope.mensagem = 'Foto incluida com sucesso';
					},
					function(error){
						$scope.mensagem = 'Foto nao incluida com sucesso';
						console.log(erro);
					}
				);

				/*$http.post('v1/fotos', $scope.foto)
				.success(function(){
					$scope.foto = {};
					$scope.mensagem = 'Foto incluida com sucesso';
				})
				.error(function(erro){
					$scope.mensagem = 'Foto nao incluida com sucesso';
					console.log(erro);
				});*/
			}

		}

	};


	$scope.submitForm = function(){
		
		if ($scope.formulario.$valid) 
		{
			cadastroDeFotos.cadastrar($scope.foto)
			.then(function (dados){
				$scope.mensagem = dados.mensagem;
				if($scope.inclusao) $scope.foto = {};
				//$scope.focado = true;
				
			})
			.catch(function (dados){
				$scope.mensagem = dados.mensagem;
			});
		}

	};	

});