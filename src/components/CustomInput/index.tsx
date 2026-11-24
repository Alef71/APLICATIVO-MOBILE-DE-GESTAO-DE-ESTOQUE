import { Ionicons } from '@expo/vector-icons';
import { KeyboardTypeOptions, Text, TextInput, View } from 'react-native';
import { colors } from '../../global/theme';
import { styles } from './styles';

interface CustomInputProps {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder: string;
  icon?: keyof typeof Ionicons.glyphMap;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  error?: string;
}

export function CustomInput({
  label,
  value,
  onChangeText,
  placeholder,
  icon,
  keyboardType = 'default',
  secureTextEntry = false,
  autoCapitalize = 'sentences',
  error,
}: CustomInputProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, error ? styles.inputError : null]}>
        {icon ? (
          <Ionicons name={icon} size={19} color={colors.muted} />
        ) : null}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.muted}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          autoCapitalize={autoCapitalize}
          selectionColor={colors.primary}
        />
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}
