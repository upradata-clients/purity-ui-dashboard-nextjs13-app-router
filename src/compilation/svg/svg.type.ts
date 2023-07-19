export interface SvgNode {
    name: string;
    type: string;
    value: string;
    attributes: { viewBox?: string; d?: string; } & Record<string, string>;
    children: SvgNode[];
}
