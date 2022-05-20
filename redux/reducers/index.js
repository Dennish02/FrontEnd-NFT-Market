import {
  ALL_NFT_MARKET,
  VALIDATE_USER,
  RESET_PASSWORD,
  RESET_ERROR,
  LOGIN_USER,
  SEND_EMAIL_TO_RESET_PASSWORD,
  RESET_ERROR_LOGUIN_USER,
  AUTH_USER,
  LOGOUT_USER,
  SEARCH_NFT,
  USER_NFT,
  EDIT_NFT_PRICE,
  CREATE_NFT,
  RESET,
  SET_COLECCIONES,
  GIFT_NFT,
  SHOW_USERS_ID,
  SAVE_VALUE,
  ACTUAL,
  FILTER_COLECTION,
  
  LOAD_COLECCIONES


} from "../constantes";

const initialState = {
  allNft: [],
  backUpAllNft: [],
  nftUser: [],
  backUpNftUser: [],
  usuario: [],
  allUsuarios: [],
  confirmacion: {},
  errorEmail: [],
  invalidToken: true,
  loginUser: false,
  creado: false,
  colecciones: [],
  usersInfo: [],
  valor:[]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_NFT_MARKET:
      if (state.allNft.length === state.backUpAllNft.length) {
        return {
          ...state,
          allNft: action.payload.nftAlldb,
          backUpAllNft: action.payload.nftAlldb,
          usuario: action.payload.usuario,
        };
      }
      return {
        ...state,
        backUpAllNft: action.payload.nftAlldb,
        usuario: action.payload.usuario,
      };

    case CREATE_NFT:
      return {
        ...state,
        creado: true,
      };
    case RESET:
      return {
        ...state,
        creado: false,
        // colecciones: [],
      };
    case SET_COLECCIONES:
      return {
        ...state,
        colecciones: action.payload,
      };
      case LOAD_COLECCIONES:
       const estado = state.colecciones

        return {
          ...state,
          estado
        }
    // case USER_NFT:
    //   const filter = state.allNft.filter((e) => e.ownerId === action.payload);
    //   return {
    //     ...state,
    //     nftUser: filter,
    //   };
    case USER_NFT:
      return {
        ...state,
        nftUser: action.payload,
        backUpNftUser: action.payload
      };

    case ACTUAL:
      return {
        ...state,
        usuario: action.payload,
      };

    case LOGIN_USER:
      return {
        ...state,
        usuario: !action.payload.error ? action.payload : null,
        errorEmail: action.payload.error ? action.payload.error : null,
        loginUser: action.payload._id && true,
      };

    case LOGOUT_USER:
      return {
        allNft: [],
        backUpAllNft: [],
        nftUser: [],
        backUpNftUser: [],
        usuario: [],
        allUsuarios: [],
        confirmacion: {},
        errorEmail: [],
        invalidToken: true,
        loginUser: false,
        creado: false,
        colecciones: [],
        usersInfo: [],
      };
    case AUTH_USER:
      return {
        ...state,
        usuario: action.payload,
      };
    case RESET_ERROR_LOGUIN_USER:
      return {
        ...state,
        errorEmail: action.payload,
      };
    case VALIDATE_USER:
      return {
        ...state,
        confirmacion: action.payload,
      };
    case SEND_EMAIL_TO_RESET_PASSWORD:
      return {
        ...state,
        errorEmail: action.payload,
      };

    case RESET_PASSWORD:
      console.log(action.payload.error);
      return {
        ...state,
        errorEmail: action.payload,
      };
    case RESET_ERROR:
      return {
        ...state,
        errorEmail: [],
      };
    case SEARCH_NFT:
      if (!action.payload) {
        return {
          ...state,
          allNft: state.backUpAllNft,
        };
      }

      let getNFT = state.backUpAllNft;
      let filterBySearch = getNFT.filter((el) =>
        el.id.toUpperCase().includes(action.payload.toUpperCase())
      );
      return {
        ...state,
        allNft: filterBySearch,
      };

    case SHOW_USERS_ID:
      return {
        ...state,
        usersInfo: action.payload,
      };
    case SAVE_VALUE:
      return {
        ...state,
      }
      case FILTER_COLECTION:
        console.log('hola desde reducer');
        const nftForFilter = state.backUpNftUser
        const filter = nftForFilter.filter(el => el.colection===(action.payload))
  
  
        return {
          ...state,
          nftUser: action.payload == 'todos' ? state.backUpNftUser : filter
        }
    case SAVE_VALUE:
      return {
        ...state,
      }    

    default:
      return state;
  }
}
export default rootReducer;
