import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#400303',
    textAlign: 'center',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  vinhoContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 2, // Para Android
    // Para iOS - use shadow properties corretamente
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imagemVinho: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
  },
  textoContainer: {
    flex: 1,
  },
  nomeVinho: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#400303',
    marginBottom: 8,
  },
  descricaoVinho: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});

export default estilos;