import { Component, type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { COLOR_TOKENS } from '../theme/tokens';

type AppErrorBoundaryProps = {
  children: ReactNode;
};

type AppErrorBoundaryState = {
  message: string | null;
};

export class AppErrorBoundary extends Component<
  AppErrorBoundaryProps,
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = { message: null };

  static getDerivedStateFromError(error: Error) {
    return { message: error.message };
  }

  render() {
    if (this.state.message) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>ChantFlow failed to render</Text>
          <Text style={styles.message}>{this.state.message}</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR_TOKENS.background,
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  message: {
    color: COLOR_TOKENS.muted,
    fontSize: 14,
    lineHeight: 22,
    marginTop: 12,
  },
  title: {
    color: COLOR_TOKENS.gold,
    fontSize: 20,
    fontWeight: '700',
  },
});
