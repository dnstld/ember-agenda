import Route from '@ember/routing/route';

export default Route.extend({
  pessoas: [
    {
      id: "1",
      nome: 'Clairton'
    },
    {
      id:"2",
      nome: 'Rodrigo'
    }
  ],
  queryParams: {
    nome: {
      refreshModel: true
    }
  },

  model(params) {
    return this.get('pessoas').filter((pessoa) => {
      return Ember.isEmpty(params.nome) || pessoa.nome.indexOf(params.nome) >= 0;
    });
  }   
});
