import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CustomInput } from '../../components/CustomInput';
import { PrimaryButton } from '../../components/PrimaryButton';
import { colors } from '../../global/theme';
import { RootStackParamList } from '../../global/types';
import { styles } from './styles';

const demoEmail = 'estoque@raizdovale.com';
const demoPassword = 'vale2026';

type LoginNavigation = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export function Login() {
  const navigation = useNavigation<LoginNavigation>();
  const [email, setEmail] = useState(demoEmail);
  const [password, setPassword] = useState(demoPassword);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setError('');

    if (!email.trim() || !password) {
      setError('Preencha seu e-mail e sua senha para continuar.');
      return;
    }

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!isEmailValid) {
      setError('Digite um endereço de e-mail válido.');
      return;
    }

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 700));

    if (email.trim().toLowerCase() !== demoEmail || password !== demoPassword) {
      setLoading(false);
      setError('Dados não conferem. Use o acesso de demonstração abaixo.');
      return;
    }

    navigation.reset({
      index: 0,
      routes: [{ name: 'BottomRoutes' }],
    });
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.brandRow}>
          <View style={styles.brandMark}>
            <Ionicons name="leaf" size={19} color={colors.white} />
          </View>
          <Text style={styles.brandName}>RAIZ DO VALE</Text>
        </View>

        <View style={styles.hero}>
          <View style={styles.heroArtwork}>
            <View style={styles.sun} />
            <View style={styles.hillBack} />
            <View style={styles.hillFront} />
            <View style={styles.pottery}>
              <Ionicons name="flower-outline" size={28} color={colors.surface} />
            </View>
          </View>
          <Text style={styles.eyebrow}>GESTÃO COM IDENTIDADE</Text>
          <Text style={styles.title}>
            O cuidado de quem{'\n'}
            <Text style={styles.titleAccent}>faz com as mãos.</Text>
          </Text>
          <Text style={styles.subtitle}>
            Seu estoque organizado, para você cuidar do que importa.
          </Text>
        </View>

        <View style={styles.formCard}>
          <Text style={styles.formTitle}>Boas-vindas</Text>
          <Text style={styles.formSubtitle}>Entre na sua conta para continuar.</Text>

          <View style={styles.fields}>
            <CustomInput
              label="E-mail"
              value={email}
              onChangeText={setEmail}
              placeholder="seu@email.com"
              icon="mail-outline"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <CustomInput
              label="Senha"
              value={password}
              onChangeText={setPassword}
              placeholder="Digite sua senha"
              icon="lock-closed-outline"
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
          <PrimaryButton title="Entrar no sistema" onPress={handleLogin} loading={loading} />
        </View>

        <View style={styles.demoNote}>
          <Ionicons name="information-circle-outline" size={18} color={colors.green} />
          <Text style={styles.demoText}>
            Acesso de demonstração:{'\n'}
            <Text style={styles.demoCredentials}>
              {demoEmail} · {demoPassword}
            </Text>
          </Text>
        </View>
        <Text style={styles.footer}>Feito com carinho no Vale do Jequitinhonha</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
