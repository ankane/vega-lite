import { Signal, SignalRef } from 'vega';
import { SelectionInit, SelectionInitInterval } from '../../selection';
import { VgData } from '../../vega.schema';
import { FacetModel } from '../facet';
import { LayerModel } from '../layer';
import { Model } from '../model';
import { UnitModel } from '../unit';
export declare function assembleInit(init: (SelectionInit | SelectionInit[] | SelectionInitInterval)[] | SelectionInit, wrap?: (str: string) => string): string;
export declare function assembleInitData(init: (SelectionInit | SelectionInit[] | SelectionInitInterval)[] | SelectionInit): any;
export declare function assembleUnitSelectionSignals(model: UnitModel, signals: Signal[]): Signal[];
export declare function assembleFacetSignals(model: FacetModel, signals: Signal[]): Signal[];
export declare function assembleTopLevelSignals(model: UnitModel, signals: Signal[]): Signal[];
export declare function assembleUnitSelectionData(model: UnitModel, data: VgData[]): VgData[];
export declare function assembleUnitSelectionMarks(model: UnitModel, marks: any[]): any[];
export declare function assembleLayerSelectionMarks(model: LayerModel, marks: any[]): any[];
export declare function assembleSelectionScaleDomain(model: Model, domainRaw: SignalRef): SignalRef;
//# sourceMappingURL=assemble.d.ts.map