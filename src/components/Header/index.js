import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, AntDesign  } from '@expo/vector-icons';

const HeaderApp = () => {

    return (
        <View style={styles.headerContainer}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Feather name="menu" size={32} color="#333" />
                </TouchableOpacity>
                <Text style={styles.title}>Bem-vindo</Text>
                <TouchableOpacity>
                    <Ionicons name="person-circle" size={32} color="#333" />
                </TouchableOpacity>
            </View>

            <Text style={styles.headlineText}>Encontre sua receita de comida favorita!</Text>

            <View style={styles.inputSearch}>
                <TextInput style={styles.input} placeholder={'Procure uma receita'} placeholderTextColor={'#fff'} />
                <TouchableOpacity style={styles.searchIcon}>
                    <AntDesign name="search1" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.categoriesWrapper}>
                <TouchableOpacity>
                    <Text style={styles.categorieDestac}>Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categorie}>Novas receitas</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.categorie}>Todas</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        color: '#333',
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
    },

    headlineText: {
        marginTop: 64,
        fontSize: 32,
        fontFamily: 'Poppins-Bold',
        color: '#333',
    },

    inputSearch: {
        position: 'relative',
        marginTop: 32,
    },

    input: {
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        backgroundColor: '#242A37',
        color: '#fff',
    },

    searchIcon: {
        position: 'absolute',
        right: 16,
        top: 10,
    },

    categoriesWrapper: {
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    categorieDestac: {
        backgroundColor: '#FE8A07',
        color: '#fff',
        fontFamily: 'Poppins-Bold',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 8,
        textAlign: 'center',
        verticalAlign: 'middle',
    },  

    categorie: {
        backgroundColor: '#fff',
        color: '#333',
        fontFamily: 'Poppins-Regular',
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#999',
        textAlign: 'center',
        verticalAlign: 'middle',
    }
});

export default HeaderApp;