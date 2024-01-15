<script setup lang="ts">
import { ref, watch } from 'vue'

import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import useIssueMutating from '../modules/issues/composables/UseIssueMutation';

interface Props {
  isOpen: boolean;
  labels: string[];
}

interface Emits {
  (e: 'onClose'): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const { issueMutation } = useIssueMutating();

const isOpen = ref<boolean>(false);

const title = ref<string>('');
const body = ref<string>('');
const labels = ref<string[]>([]);

watch(props, () => {
  isOpen.value = props.isOpen;
});

</script>

<template>
	<div class="q-pa-md q-gutter-sm">
		<q-dialog v-model="isOpen" position="bottom" full-width persistent >
			<q-card class="q-pa-md q-gutter-md" style="width: 500px">
				<q-form>
					<q-card-section class="column no-wrap">
						<div>
							<div class="text-weight-bold">New issue</div>
							<div class="text-grey">Add new issue with labels</div>
						</div>

						<q-space />

						<div>
							<q-input
								label="Title"
								v-model="title"
								filled
                dense
								placeholder="Title"
								class="q-mb-sm"
                :rules="[val => !!val || 'Field is required']"
							/>

							<q-select
								label="Multiple selection"
								v-model="labels"
								:options="$props.labels"
								filled
                dense
								multiple
								use-chips
								stack-label
								class="q-mb-sm"
							/>
						</div>

						<!-- Markdown editor -->
            <MdEditor v-model="body" placeholder="# Markdown" language="en-US" />
					</q-card-section>

					<q-card-actions align="right">
						<q-btn
              @click="emits('onClose')"
              label="Cancel"
              v-close-popup
              flat
              color="dark" />
						<q-space />
						<q-btn
							type="submit"
							flat
							label="Add Issue"
							color="dark"
						/>
					</q-card-actions>
				</q-form>
			</q-card>
		</q-dialog>
	</div>
</template>

<style scoped></style>
