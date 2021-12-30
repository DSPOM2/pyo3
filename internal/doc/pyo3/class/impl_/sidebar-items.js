initSidebarItems({"fn":[["alloc_with_freelist","Implementation of tp_alloc for `freelist` classes."],["fallback_new","Default new implementation"],["free_with_freelist","Implementation of tp_free for `freelist` classes."],["tp_dealloc","Implementation of tp_dealloc for all pyclasses"]],"macro":[["define_pyclass_binary_operator_slot","Macro which expands to three items"],["define_pyclass_setattr_slot","Macro which expands to three items"],["generate_pyclass_add_slot",""],["generate_pyclass_and_slot",""],["generate_pyclass_divmod_slot",""],["generate_pyclass_floordiv_slot",""],["generate_pyclass_lshift_slot",""],["generate_pyclass_matmul_slot",""],["generate_pyclass_mod_slot",""],["generate_pyclass_mul_slot",""],["generate_pyclass_or_slot",""],["generate_pyclass_pow_slot",""],["generate_pyclass_rshift_slot",""],["generate_pyclass_setattr_slot",""],["generate_pyclass_setdescr_slot",""],["generate_pyclass_setitem_slot",""],["generate_pyclass_sub_slot",""],["generate_pyclass_truediv_slot",""],["generate_pyclass_xor_slot",""],["methods_trait",""],["slot_fragment_trait",""],["slots_trait",""]],"struct":[["PyBufferProcs",""],["PyClassImplCollector","This type is used as a “dummy” type on which dtolnay specializations are applied to apply implementations from `#[pymethods]` & `#[pyproto]`"],["ThreadCheckerImpl","Thread checker for unsendable types. Panics when the value is accessed by another thread."],["ThreadCheckerInherited","Thread checker for types that have `Send` and `extends=...`. Ensures that `T: Send` and the parent is not accessed by another thread."],["ThreadCheckerStub","Stub checker for `Send` types."]],"trait":[["PyAsyncProtocolMethods",""],["PyAsyncProtocolSlots",""],["PyBufferProtocolProcs",""],["PyBufferProtocolSlots",""],["PyClassAllocImpl",""],["PyClassBaseType","Trait denoting that this class is suitable to be used as a base type for PyClass."],["PyClassDefaultSlots",""],["PyClassDescriptors",""],["PyClassFreeImpl",""],["PyClassImpl","Implements the underlying functionality of `#[pyclass]`, assembled by various proc macros."],["PyClassInventory","Implementation detail. Only to be used through our proc macro code. Method storage for `#[pyclass]`. Allows arbitrary `#[pymethod]` blocks to submit their methods, which are eventually collected by `#[pyclass]`."],["PyClassNewImpl",""],["PyClassThreadChecker",""],["PyClassWithFreeList","Implements a freelist."],["PyClass__add__SlotFragment",""],["PyClass__and__SlotFragment",""],["PyClass__delattr__SlotFragment",""],["PyClass__delete__SlotFragment",""],["PyClass__delitem__SlotFragment",""],["PyClass__divmod__SlotFragment",""],["PyClass__floordiv__SlotFragment",""],["PyClass__lshift__SlotFragment",""],["PyClass__matmul__SlotFragment",""],["PyClass__mod__SlotFragment",""],["PyClass__mul__SlotFragment",""],["PyClass__or__SlotFragment",""],["PyClass__pow__SlotFragment",""],["PyClass__radd__SlotFragment",""],["PyClass__rand__SlotFragment",""],["PyClass__rdivmod__SlotFragment",""],["PyClass__rfloordiv__SlotFragment",""],["PyClass__rlshift__SlotFragment",""],["PyClass__rmatmul__SlotFragment",""],["PyClass__rmod__SlotFragment",""],["PyClass__rmul__SlotFragment",""],["PyClass__ror__SlotFragment",""],["PyClass__rpow__SlotFragment",""],["PyClass__rrshift__SlotFragment",""],["PyClass__rshift__SlotFragment",""],["PyClass__rsub__SlotFragment",""],["PyClass__rtruediv__SlotFragment",""],["PyClass__rxor__SlotFragment",""],["PyClass__set__SlotFragment",""],["PyClass__setattr__SlotFragment",""],["PyClass__setitem__SlotFragment",""],["PyClass__sub__SlotFragment",""],["PyClass__truediv__SlotFragment",""],["PyClass__xor__SlotFragment",""],["PyDescrProtocolMethods",""],["PyDescrProtocolSlots",""],["PyGCProtocolSlots",""],["PyIterProtocolSlots",""],["PyMappingProtocolMethods",""],["PyMappingProtocolSlots",""],["PyNumberProtocolMethods",""],["PyNumberProtocolSlots",""],["PyObjectProtocolMethods",""],["PyObjectProtocolSlots",""],["PySequenceProtocolSlots",""]]});