// Communication channel interface (injected by the platform)
interface PlatformBridge {
  query(gql: string, variables?: Record<string, unknown>): Promise<unknown>;
  mutate(gql: string, variables?: Record<string, unknown>): Promise<unknown>;
  subscribe(gql: string, variables: Record<string, unknown>, onData: (data: unknown) => void): () => void;
  emit(event: string, payload?: unknown): void;
  on(event: string, handler: (payload?: unknown) => void): () => void;
  invalidateQueries(names: string[]): void;
  navigate(path: string): void;
  getTheme(): Record<string, string>;
  getUser(): Record<string, unknown> | null;
  getRoute(): { path: string; params: Record<string, string> };
  getModuleToken(): string;
}

export class WpElement extends HTMLElement {
  private _bridge: PlatformBridge | null = null;
  private _props: Record<string, unknown> = {};

  // Called by platform to inject bridge
  __setPlatformBridge(bridge: PlatformBridge): void {
    this._bridge = bridge;
  }

  // Called by platform to set props
  __setProps(props: Record<string, unknown>): void {
    this._props = { ...props };
    this.onPropsChanged(this._props);
  }

  get props(): Record<string, unknown> { return { ...this._props }; }
  get theme(): Record<string, string> { return this._bridge?.getTheme() ?? {}; }
  get user(): Record<string, unknown> | null { return this._bridge?.getUser() ?? null; }
  get route(): { path: string; params: Record<string, string> } {
    return this._bridge?.getRoute() ?? { path: '', params: {} };
  }

  async query(gql: string, variables?: Record<string, unknown>): Promise<unknown> {
    if (!this._bridge) throw new Error('Platform bridge not initialized');
    return this._bridge.query(gql, variables);
  }

  async mutate(gql: string, variables?: Record<string, unknown>): Promise<unknown> {
    if (!this._bridge) throw new Error('Platform bridge not initialized');
    return this._bridge.mutate(gql, variables);
  }

  subscribe(gql: string, variables: Record<string, unknown>, onData: (data: unknown) => void): () => void {
    if (!this._bridge) throw new Error('Platform bridge not initialized');
    return this._bridge.subscribe(gql, variables, onData);
  }

  emit(event: string, payload?: unknown): void {
    this._bridge?.emit(event, payload);
  }

  on(event: string, handler: (payload?: unknown) => void): () => void {
    if (!this._bridge) return () => {};
    return this._bridge.on(event, handler);
  }

  invalidateQueries(names: string[]): void {
    this._bridge?.invalidateQueries(names);
  }

  navigate(path: string): void {
    this._bridge?.navigate(path);
  }

  // Override in subclass to react to prop changes
  onPropsChanged(_props: Record<string, unknown>): void {}
}
