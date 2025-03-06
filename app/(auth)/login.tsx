import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { MotiView } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, typography, shadows, borderRadius, gradients } from '../theme';
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // TODO: Implement Firebase authentication
    router.replace('/(tabs)');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 1000 }}
        style={styles.content}>
        {/* Background image with gradient overlay */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop' }}
            style={styles.headerImage}
          />
          <LinearGradient
            colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.6)']}
            style={styles.imageOverlay}
          />
          <MotiView
            from={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 1200, delay: 300 }}
            style={styles.logoContainer}>
            <View style={styles.logoBackground}>
              <Text style={styles.logoText}>Devis+</Text>
            </View>
            <Text style={styles.logoTagline}>Votre assistant devis et facturation</Text>
          </MotiView>
        </View>
        
        <MotiView
          from={{ translateY: 100 }}
          animate={{ translateY: 0 }}
          transition={{ type: 'spring', damping: 15, stiffness: 120 }}
          style={styles.formContainer}>
          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 800, delay: 400 }}>
            <Text style={styles.title}>Bienvenue</Text>
            <Text style={styles.subtitle}>Connectez-vous pour continuer</Text>
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 800, delay: 600 }}
            style={styles.inputContainer}>
            <Mail size={20} color={colors.text.secondary} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor={colors.text.tertiary}
            />
          </MotiView>

          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 800, delay: 800 }}
            style={styles.inputContainer}>
            <Lock size={20} color={colors.text.secondary} />
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholderTextColor={colors.text.tertiary}
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeButton}>
              {showPassword ? 
                <EyeOff size={20} color={colors.text.secondary} /> : 
                <Eye size={20} color={colors.text.secondary} />
              }
            </TouchableOpacity>
          </MotiView>

          <MotiView
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 15, stiffness: 150, delay: 1000 }}>
            <TouchableOpacity onPress={handleLogin}>
              <LinearGradient
                colors={gradients.primary}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Se connecter</Text>
                <ArrowRight size={20} color={colors.background.primary} />
              </LinearGradient>
            </TouchableOpacity>
          </MotiView>

          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'timing', duration: 800, delay: 1200 }}
            style={styles.forgotPasswordContainer}>
            <TouchableOpacity style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
          </MotiView>

          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'timing', duration: 800, delay: 1400 }}
            style={styles.registerContainer}>
            <Text style={styles.registerText}>Vous n'avez pas de compte ?</Text>
            <TouchableOpacity>
              <Text style={styles.registerButton}>S'inscrire</Text>
            </TouchableOpacity>
          </MotiView>
        </MotiView>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    position: 'relative',
    height: 340,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logoBackground: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.md,
    marginBottom: 12,
  },
  logoText: {
    fontSize: 24,
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors.primary[600],
  },
  logoTagline: {
    fontSize: 16,
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors.background.primary,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  formContainer: {
    flex: 1,
    backgroundColor: colors.background.primary,
    marginTop: -40,
    borderTopLeftRadius: borderRadius.xxl,
    borderTopRightRadius: borderRadius.xxl,
    padding: spacing.xl,
    ...shadows.lg,
  },
  title: {
    ...typography.h1,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body2,
    marginBottom: spacing.xl,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background.tertiary,
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.md,
  },
  input: {
    ...typography.body1,
    flex: 1,
    paddingVertical: spacing.md,
    marginLeft: spacing.md,
    color: colors.text.primary,
  },
  eyeButton: {
    padding: spacing.xs,
  },
  loginButton: {
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.lg,
  },
  loginButtonText: {
    ...typography.button,
    color: colors.background.primary,
    marginRight: spacing.sm,
  },
  forgotPasswordContainer: {
    alignItems: 'center',
    marginTop: spacing.lg,
  },
  forgotPassword: {
    padding: spacing.xs,
  },
  forgotPasswordText: {
    ...typography.body2,
    color: colors.primary[600],
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  registerText: {
    ...typography.body2,
    color: colors.text.secondary,
  },
  registerButton: {
    ...typography.body2,
    color: colors.primary[600],
    fontFamily: 'PlusJakartaSans-SemiBold',
    marginLeft: spacing.xs,
  },
});