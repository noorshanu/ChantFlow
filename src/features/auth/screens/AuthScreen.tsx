import { zodResolver } from '@hookform/resolvers/zod';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, Platform, Pressable, View } from 'react-native';
import { z } from 'zod';

import { type RootStackParamList } from '../../../app/navigation/routeTypes';
import {
  AppButton,
  AppDivider,
  AppScreen,
  AppText,
  AppTextInput,
  GoogleIcon,
} from '../../../components/ui';

const authSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
});

type AuthFormValues = z.infer<typeof authSchema>;
type AuthScreenProps = NativeStackScreenProps<RootStackParamList, 'Auth'>;

export const AuthScreen = ({ navigation }: AuthScreenProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<AuthFormValues>({
    defaultValues: { email: '' },
    resolver: zodResolver(authSchema),
  });

  const continueWithEmail = ({ email }: AuthFormValues) => {
    navigation.replace('ReligionSelection', { email });
  };

  const continueWithGoogle = () => {
    navigation.replace('ReligionSelection');
  };

  return (
    <AppScreen contentClassName="justify-center pb-10">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        className="flex-1 justify-center"
      >
        <View className="rounded-premium border border-premium bg-card/70 p-card shadow-premium">
          <AppText variant="eyebrow">Welcome back</AppText>
          <AppText className="mt-section" variant="title">
            Sign in to ChantFlow
          </AppText>
          <AppText className="mt-section">
            Enter your email or continue with Google to personalize your sacred
            practice.
          </AppText>

          <View className="mt-6">
            <Controller
              control={control}
              name="email"
              render={({ field: { onBlur, onChange, value } }) => (
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  error={errors.email?.message}
                  keyboardType="email-address"
                  label="Email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  placeholder="you@example.com"
                  value={value}
                />
              )}
            />
          </View>

          <AppButton
            accessibilityLabel="Continue with your email"
            className="mt-6"
            label="Continue with Email"
            onPress={handleSubmit(continueWithEmail)}
          />

          <AppDivider />

          <Pressable
            accessibilityLabel="Continue with your Google account"
            accessibilityRole="button"
            className="flex-row items-center justify-center gap-3 rounded-premium border border-premium bg-card py-4 active:opacity-90"
            onPress={continueWithGoogle}
          >
            <GoogleIcon />
            <AppText className="text-textPrimary" variant="body">
              Continue with Google
            </AppText>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </AppScreen>
  );
};
