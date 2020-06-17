import Vue from 'vue'
import Vuex from 'vuex'

import UserDataService from '../services/UserDataService'
import TableDataService from '../services/TableDateService'

Vue.use(Vuex)

let token = null

function hasToken(){
  if(Cookies.get('csrftoken')==null) {
    return false;
  }
  else{
    return true;
  }
};

const Player = {
  state: {
    username: token,
    active: hasToken(),
    cards: [],
    whiteCard: null
  },
  mutations: {
    setUsername(state, user) {
      state.username = user.toUpperCase();
    },
    logout(state, key) {
      state.active = false;
      state.username = null;
      state.cards = [];
      state.whiteCard = null;
    },
    setCards(state, cards) {
      state.cards = cards;

      if (state.cards[0] == '[' && state.cards[state.cards.length] == ']')
        state.cards.splice(0, 1);

      state.cards.splice(state.cards.length, 1);

    }
  },
  actions: {
    loginAction(context, keys) {

      UserDataService
        .login(keys)
        .then(response => {

          Cookies.set('csrftoken',response.data['auth_token']);

          Swal.fire({
            icon: 'success',
            title: 'Sesión iniciada con éxito'
          }).then(result => {

            location.href = '#/';

            window.location.reload(false);

          });

        })
        .catch(error => {

          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data['non_field_errors']
          });

        });
    },

    registerAction(context, keys) {
      
      UserDataService
        .register(keys)
        .then(response => {

          Swal.fire({
              icon: 'success',
              title: 'Usuario registrado con éxito',

          }).then(result => {
              location.href = '#/login/'
          })

      })
      .catch(error => {

          if (error.response.data['password'])
              Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: error.response.data['password']
              });

          else if (error.response.data['username'])
              Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: error.response.data['username']
              });
      });

    },

    logoutAction(context) {

      UserDataService.
        logout()
        .then(response => {

          Cookies.remove('csrftoken');

          context.commit('logout', null);

          Swal.fire({
            icon: 'success',
            title: 'Sesión cerrada con éxito',

          }).then(result => {
            location.href = '#/login/'
          });

        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data
          });
        });

    },

    setCardsAction(context) {

      UserDataService
        .get()
        .then(response => {

          let white_cards = response.data['white_cards'];

          context.commit('setCards', white_cards.split(','));
          context.commit('setUsername', response.data['name']);

        })
        .catch(error => console.log(error.response.data));
    }
    
  },
  getters: {}
};

const Table = {
  state: {
    codigo: null,
    blackCard: 'Luego de desmayarme de la pea en Año Nuevo, me desperté con _____.',
    whiteCards: [],
    is_active: false
  },
  mutations: {
    setCodigo(state, codigo) {
      state.codigo = codigo;
    },
    setBlackCard(state, card) {
      state.blackCard = card;
    },
    setWhiteCards(state, cards) {
      for (const card in cards){
        state.whiteCards = [{
          name: cards[card].name.toUpperCase(),
          card: cards[card].current_card
        },...state.whiteCards];
      }
    }
  },
  actions: {
    createTableAction(context) {

      TableDataService
        .create()
        .then(response => {

          context.commit('setCodigo', response.data['id']);

          context.commit('setBlackCard', response.data['black_card']);

          Swal.fire({
            icon: 'success',
            title: 'Mesa creada con éxito',
            text: 'Código: '+response.data['id']

          }).then(result => {
            location.href = '#/mesa/'
          });

        })
        .catch(error => {

          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data
          });

        });

    },

    joinTableAction(context, id){
      TableDataService
        .update(id)
        .then(response =>{

          context.commit('setCodigo', response.data['id']);

          context.commit('setBlackCard', response.data['black_card']);

          context.commit('setWhiteCards', response.data['players']);

          Swal.fire({
            icon: 'success',
            title: 'Se ha unido con éxito',
          }).then(result => {
            location.href = '#/mesa/'
          });

        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se puede unir'
          });

        });
    },

    searchTableAction({dispatch, commit}, id) {
      TableDataService
        .get(id)
        .then(response => {

          Swal.fire({

            icon: 'info',
            title: 'Mesa encontrada',
            text: '¿Desea unirse?',
            showCancelButton:true,
            cancelButtonColor:'#d33'

          }).then(result => {
            if (result.value){
              dispatch('joinTableAction', id);
            }
          });

        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Código erroneo tabla no existente'
          });

        });
    },

    setBlackCardAction(context) {
      TableDataService
        .get(id)
        .then(response => {
          context('setBlackCard', response.data['black_card'])
        })
        .catch(error => {

          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.response.data
          });

        });
    },

    setWhiteCardsAction({context, state}) {
      TableDataService
        .get(state.codigo)
        .then(response => {
          context.commit('setWhiteCards', response.data['players']);
        })
        .catch(error => console.log(error.response.data));
    }


  },
  getters: {
    cartaNegra(state) {
      return state.blackCard;
    },
    cartasBlancas(state) {
      return state.whiteCards;
    }

  }
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    table: Table,
    player: Player
  }
})