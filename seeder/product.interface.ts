export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	price: number
	images?: string[]
	wirelessInterfaces?: string  // Беспроводные интерфейсы
	mainCamera?: string // Разрешение основной камеры
	os?: string // Операционная система
	screenResolution?: string // Разрешение экрана
	displayUpdateRate?: string // Частота обновления экрана
	numberMainCameras?: string // Количество основных камер
	mainCameraFeatures?: string // Характеристики основной камеры
	mainCameraFeaturesTwo?: string // Характеристики основной камеры 2
	mainCameraFeaturesThree?: string // Характеристики основной камеры 3
	frontCamera?: string // фронтальной камеры
	NumberSIMCards?: string // Количество SIM-карт
	BatteryCapacity?: string // Емкость аккумулятора
	videotaping?: string // Видеосъемка
	screenFeatures?: string // Особенности экрана
	ppi?: string // Число пикселей на дюйм (PPI)
	categoryId?: number | null
	storageCapacityId?: number | null
	colorsId?: number | null
	modelsId?: number | null
	communicationOptionsId?: number | null
	cpuId?: number | null
	gpuId?: number | null
	ramId?: number | null
	diagonalId?: number | null
	sizeId?: number | null
	strapTypeId?: number | null
	userId?: number | null
}
