export function getProductName(type) {
	switch (type) {
	case 'MA': return 'Original Mattress';
	case 'PR': return 'Mattress Protector';
	case 'PW': return 'Original Pillow';
	case 'FP': return 'Memory Foam Pillow';
	case 'DP': return 'Down Pillow';
	case 'PC': return 'Pillowcase Set';
	case 'SH': return 'Sheet Set';
	case 'DV': return 'Original Duvet';
	case 'DD': return 'Down Duvet';
	case 'DC': return 'Duvet Cover';
	case 'WF': return 'Gaviota Platform Bed Frame';
	case 'MF': return 'Arrellaga Folding Bed Frame';
	case 'FO': return 'Mattress Foundation';
	case 'FL': return 'Foundation Legs';
	case 'HY': return 'Luxe Hybrid Mattress';
	case 'PP': return '10 Year Protection Plan';
	case 'CB': return 'Cotton Blend Sheets';
	case 'BD': return 'Cotton Blend Duvet Cover';
	case 'BP': return 'Cotton Blend Pillowcase Set';
	case 'CS': return 'Cotton Sheets';
	case 'CD': return 'Cotton Duvet Cover';
	case 'CP': return 'Cotton Pillowcase Set';
	case 'OC': return 'Organic Cotton Sheets';
	case 'OD': return 'Organic Cotton Duvet Cover';
	case 'OP': return 'Organic Cotton Pillowcase Set';
	case 'TU':
	case 'UU': return 'Upholstered Bed Frame';
	case 'PM': return 'Original Premium Mattress';
	case 'AF': return 'Anacapa Wood Bed Frame';
	case 'SF': return 'Chapala Metal Bed Frame';
	default: return 'Original Mattress';
	}
};